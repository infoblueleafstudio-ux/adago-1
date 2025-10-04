# 愛宕幼稚園 公式サイト

Next.js 14 + Tailwind CSS + microCMS で構築された幼稚園の公式サイトです。

## 🚀 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: microCMS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Form**: Formrun integration

## 📁 プロジェクト構成

```
adago-1/
├── app/                    # Next.js App Router
│   ├── page.tsx           # トップページ
│   ├── layout.tsx         # ルートレイアウト
│   ├── news/              # お知らせ
│   ├── about/             # 園について
│   ├── education/         # 教育内容
│   ├── admission/          # 入園案内
│   ├── contact/           # お問い合わせ
│   ├── thanks/            # 送信完了
│   └── api/               # API Routes
├── components/            # 再利用可能コンポーネント
│   ├── ui/               # 基本UIコンポーネント
│   ├── common/           # 共通コンポーネント
│   └── templates/        # テンプレートコンポーネント
├── lib/                   # ユーティリティ
│   ├── microcms.ts       # microCMS クライアント
│   ├── schema.ts         # 型定義
│   └── form-service.ts   # フォーム送信
├── public/               # 静的ファイル
└── styles/              # スタイルファイル
```

## 🛠️ 開発環境セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
FORMRUN_ENDPOINT=https://api.formrun.com/v1/forms/your-form-id/submit
SITE_URL=https://your-domain.vercel.app
GOOGLE_VERIFICATION_CODE=your-verification-code
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 🚀 本番デプロイ

### Vercel へのデプロイ

1. [Vercel](https://vercel.com) にアカウントを作成
2. GitHub リポジトリを Vercel に接続
3. 環境変数を Vercel Dashboard で設定
4. 自動デプロイが開始されます

### 環境変数の設定（本番）

Vercel Dashboard の Environment Variables で以下を設定：

- `MICROCMS_SERVICE_DOMAIN`: microCMS サービスドメイン
- `MICROCMS_API_KEY`: microCMS API キー
- `FORMRUN_ENDPOINT`: Formrun エンドポイント
- `SITE_URL`: 本番サイトURL
- `GOOGLE_VERIFICATION_CODE`: Google Search Console 認証コード

## 📝 利用可能なスクリプト

```bash
npm run dev          # 開発サーバー起動
npm run build        # 本番ビルド
npm run start        # 本番サーバー起動
npm run lint         # ESLint チェック
npm run typecheck    # TypeScript チェック
```

## 🎨 機能一覧

### ✅ 実装済み機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **SEO最適化**: メタタグ、OGP、構造化データ
- **画像最適化**: Next.js Image コンポーネント使用
- **静的生成**: SSG + ISR で高速表示
- **お問い合わせフォーム**: バリデーション、スパム対策
- **sitemap自動生成**: 検索エンジン最適化
- **アクセシビリティ**: WCAG 2.1 準拠

### 📄 ページ構成

- **トップページ**: 最新ニュース、園の紹介
- **お知らせ**: ニュース一覧・詳細
- **園について**: 概要、歴史、施設、保護者の声
- **教育内容**: 教育方針、カリキュラム、先生紹介
- **入園案内**: 募集要項、認定区分、保育料
- **お問い合わせ**: フォーム、連絡先情報

## 🔧 カスタマイズ

### デザインの変更

Tailwind CSS を使用しているため、`tailwind.config.ts` でカスタマイズ可能です。

### コンテンツの管理

microCMS でコンテンツを管理できます。各コンテンツタイプの設定は `lib/schema.ts` で定義されています。

## 📞 サポート

技術的な質問や問題がございましたら、開発チームまでお問い合わせください。

---

© 2024 愛宕幼稚園. All rights reserved.