# タスク実行計画（Cursor用）— 完成までのステップバイステップ

> 前提：UI雛形はBolt.newで作成済み。GitHubへプッシュ完了、Cursorでクローン済み。

## Phase 0: 初期セットアップ（10分）
- [ ] `npm i` / `pnpm i` で依存関係インストール
- [ ] Tailwind 設定確認（`tailwind.config.ts` / `globals.css`）
- [ ] ESLint/Prettier 導入（未導入なら `npx @biomejs/biome` でも可）
- [ ] `app` ルータに統一されているか確認

**Cursor Prompt（貼り付け）**
```
プロジェクトをスキャンして、Next.js14のappルータ構成・Tailwindの設定・ESLint/Prettierの有無を確認。欠けているものがあれば最小構成で追加してコミットしてください。
```

## Phase 1: microCMS 連携（60分）
- [ ] microCMS サービス作成、APIキー取得、モデル定義（要件定義B）
- [ ] `.env.local` に `MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY` を設定
- [ ] `/lib/microcms.ts` 作成（技術設計 12.1）
- [ ] 型定義を `schema.ts` に作成
- [ ] トップの「新着3件」をAPI連携

**Cursor Prompt**
```
/lib/microcms.ts と /lib/schema.ts を作成。要件定義のスキーマに沿って型を定義し、トップページでnews最新3件を表示するまで実装。ダミーUIは維持してOK。ISRを有効化（revalidate=3600）。
```

## Phase 2: ルーティングとテンプレート（120分）
- [ ] `/news`（一覧・詳細）
- [ ] `/edu/teachers`（一覧・詳細）
- [ ] `/about/voices`（一覧・詳細）
- [ ] 固定ページ（理念/施設/歴史/子育て支援/10の魅力）
- [ ] タイムライン（/edu/day, /edu/events）
- [ ] カリキュラム（タブUI）

**Cursor Prompt**
```
要件定義CとUI雛形を踏まえ、ニュース/先生/声の一覧・詳細テンプレートを作成。`generateStaticParams`とmicroCMS fetchを実装。固定ページは単一APIの値をセクションごとに描画。タイムラインとタブはダミーデータ→API連携の順で。
```

## Phase 3: コンポーネント共通化（45分）
- [ ] `Card`, `Timeline`, `Tabs`, `Gallery`, `CTA`, `Breadcrumbs` を `/components` に移管
- [ ] アクセシビリティ対応（alt, aria, focus）

**Cursor Prompt**
```
コンポーネントを共通化し、重複スタイルを削減。画像には適切なalt、キーボード操作可能なアコーディオン/タブに修正。Storybook導入は任意。
```

## Phase 4: フォーム & 外部リンク（45分）
- [ ] `/contact` フォームUI整備（name/phone/address/email/emailConfirm/message）
- [ ] 外部フォームサービスへ送信（Basin等）または埋め込み
- [ ] `/thanks` へ遷移（クエリ or サンクスURL）
- [ ] 入園案内ページは自治体サイトへの外部リンク集

**Cursor Prompt**
```
/contact のフォームを外部サービス送信に対応。honeypotとreCAPTCHA v3（任意）を追加し、成功時は/thanksへ。入園案内ページは外部リンクのカード一覧で実装。
```

## Phase 5: SEO / 構造化データ / パフォーマンス（60分）
- [ ] `generateMetadata` 実装（タイトル/説明/OGP）
- [ ] 構造化データ（JSON-LD: Organization/LocalBusiness/Article/FAQPage）
- [ ] 画像の`sizes`/`priority`最適化、CLS対策
- [ ] `next-sitemap` で `sitemap.xml` 自動生成

**Cursor Prompt**
```
/lib/seo.ts を作成し、各ページで generateMetadata を実装。トップ/お知らせ/FAQにJSON-LDを追加。next-sitemapを導入してsitemap.xmlとrobots.txtを生成。
```

## Phase 6: 品質保証（QA）& デプロイ（60分）
- [ ] Lighthouse（Performance 80+ / A11y 90+）
- [ ] E2E（トップ→ニュース詳細→お問い合わせ）
- [ ] Vercel に接続しPreview/Productionを確認
- [ ] 環境変数・ドメイン設定・ISR挙動確認

**Cursor Prompt**
```
重要導線のE2Eテスト（Playwright）を追加。VercelのPreview URLでLighthouseを測定し、パフォーマンス改善案を自動提案して適用。ISRの反映をnews更新で確認。
```

## 付録: コミットメッセージ規約（例）
- `feat(page): news list/detail with microCMS`
- `feat(comp): tabs & timeline`
- `chore(ci): add eslint/prettier`
- `perf(img): optimize hero sizes`
- `docs: add README`

## 完了条件（Definition of Done）
- [ ] 要件定義の全チェックがグリーン
- [ ] CIグリーン（lint/test）
- [ ] Vercel本番で主要導線が正常に動作
- [ ] GA4イベント（/thanks 到達）が計測
