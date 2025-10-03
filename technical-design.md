# 技術設計書 — Next.js + Tailwind + microCMS

## 1. 技術スタック
- Framework: **Next.js 14+**（`app/` ルータ）
- Language: **TypeScript**
- UI: **Tailwind CSS**
- CMS: **microCMS**（REST API）
- Hosting: **Vercel**
- VCS: **GitHub**
- Lint/Format: **ESLint / Prettier**
- Analytics: **GA4**（gtag.js）

## 2. ディレクトリ構成（例）
```
/app
  /(site)
    /components
      header.tsx, footer.tsx, breadcrumbs.tsx, cta.tsx
      card.tsx, timeline.tsx, tabs.tsx, gallery.tsx
    /(pages)
      page.tsx                      # トップ
      strengths/page.tsx
      about/overview/page.tsx
      about/facilities/page.tsx
      about/history/page.tsx
      about/voices/page.tsx
      about/voices/[id]/page.tsx
      edu/philosophy/page.tsx
      edu/day/page.tsx
      edu/events/page.tsx
      edu/curriculum/page.tsx
      edu/teachers/page.tsx
      edu/teachers/[id]/page.tsx
      admission/page.tsx
      support/page.tsx
      news/page.tsx
      news/[id]/page.tsx
      faq/page.tsx
      contact/page.tsx
      thanks/page.tsx
  /lib
    microcms.ts                     # APIクライアント
    seo.ts                          # メタ/OGP生成
    schema.ts                       # 型定義（Zod）
  /styles
    globals.css
/public
  /images (ダミー画像・QRプレースホルダー)
```

## 3. 環境変数（Vercel）
- `MICROCMS_SERVICE_DOMAIN`（例：`your-service`）
- `MICROCMS_API_KEY`（内容参照用）
- `MICROCMS_DRAFT_KEY`（プレビュー用 任意）
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`（任意）

## 4. microCMS API 設計
### 4.1 エンドポイント
- `news`（一覧/詳細）
- `teachers`
- `voices`
- `faq`
- `events`
- `oneday`（単一 or 別名 `daily`）
- `globals`（単一）
- `curriculum`（単一）
- `about`（単一）

### 4.2 型（TypeScript）
```ts
export type News = {
  id: string; title: string; body: string; date: string;
  category?: "行事" | "連絡" | "お知らせ"; image?: { url: string; width: number; height: number };
};
export type FAQ = { id: string; question: string; answer: string; category?: string };
export type Teacher = { id: string; name: string; role: string; image?: Img; profile?: string; qa?: { q: string; a: string }[] };
export type Voice = { id: string; name?: string; type: "卒園生" | "保護者"; body: string; image?: Img };
export type EventItem = { month: number; titles: string[]; images?: Img[]; description?: string };
export type OneDay = { items: { time: string; title: string; description?: string; image?: Img }[] };
export type Globals = {
  siteName: string; tel: string; fax?: string; address: string; mapUrl?: string;
  instagramUrl?: string; lineQr?: Img; footerCta?: string
};
export type Curriculum = { tabs: { label: string; content: string; images?: Img[] }[] };
export type Img = { url: string; width: number; height: number };
```

## 5. データ取得戦略
- **SSG + ISR** を基本とする（`revalidate` 3600秒など）
- 詳細ページは `generateStaticParams` + `fetch`（microCMS）
- プレビューは `draftKey` をクエリで受け取り `cache: "no-store"`

## 6. SEO / メタ
- `generateMetadata` を各ページで実装。`seo.ts` にヘルパー。
- OGP: 画像は固定 or 動的生成（後回し可）
- サイトマップ：`/sitemap.xml` 自動生成（`next-sitemap`）

## 7. アクセシビリティ / UI 指針
- 日本語本文の行間 `leading-relaxed` 以上
- 画像は `alt` 必須、装飾画像は空alt
- フォーカスリング可視（Tailwind `focus:outline-*`）
- コンポーネントはアトミックに分割し再利用性を確保

## 8. フォーム
- UIのみNext側で実装し、送信は外部サービス（Formrun/Basin/Vercel Forms）
- 自動返信（外部側設定）  
  - 件名：`【{globals.siteName}】お問い合わせありがとうございます`  
  - 本文：送信内容コピー / 3営業日以内のご連絡案内
- サンクスページ `/thanks` に遷移（クエリ or POST-redirect）

## 9. パフォーマンス
- `next/image` の `fill` / `sizes` / `priority` 適用
- 重要領域は `prefetch` / 下層は `lazy`
- 画像は可能なら `AVIF/WebP`、ヒーローは `priority` でCLS抑制
- CSS はコンポーネント粒度、未使用クラスはPurge（Tailwind標準）

## 10. セキュリティ
- APIキーはサーバ側のみ参照（`server actions` or 直接fetch）
- reCAPTCHA v3（フォーム側で利用する場合は環境変数化）
- XSS/HTML出力は `dangerouslySetInnerHTML` を使う場合は `sanitize`

## 11. デプロイ / 運用
- Vercel に GitHub 連携（PR Preview）
- 環境変数を Vercel に設定
- Domain 設定（任意）
- ISRの再検証は自然更新。即時反映が必要なら Revalidate Webhook も可

## 12. 参考コードスニペット

### 12.1 microCMS クライアント（`/lib/microcms.ts`）
```ts
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN!;
const apiKey = process.env.MICROCMS_API_KEY!;

export async function mcGet<T>(endpoint: string, query: Record<string, any> = {}): Promise<T> {
  const params = new URLSearchParams(query as any).toString();
  const res = await fetch(`https://${serviceDomain}.microcms.io/api/v1/${endpoint}?${params}`, {
    headers: { "X-MICROCMS-API-KEY": apiKey },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`microCMS error ${res.status}`);
  return res.json();
}
```

### 12.2 ニュース一覧（抜粋）
```ts
// app/(site)/news/page.tsx
import { mcGet } from "@/lib/microcms";

type List<T> = { contents: T[]; totalCount: number; offset: number; limit: number };
export default async function NewsPage() {
  const data = await mcGet<List<{ id: string; title: string; date: string }>>("news", {
    orders: "-date",
    limit: 12,
  });
  // ここでカード表示...
  return <div className="container mx-auto px-4 py-10">...</div>;
}
```

### 12.3 トップの新着3件
```ts
// app/(site)/page.tsx
const latest = await mcGet<List<{ id: string; title: string; date: string }>>("news", { orders: "-date", limit: 3 });
```

## 13. テスト / 品質
- ESLint/Prettier CI
- `@playwright/test` による重要導線のE2E（トップ→ニュース詳細/お問い合わせ）
- Axe（`@axe-core/playwright`）でa11yチェック
- Lighthouse CI（任意）
