# 要件定義書（チェックリスト形式） — atago-kdg.com 構造再現プロジェクト

> プロジェクト種別：Next.js + Tailwind + microCMS（ヘッドレス） / Vercelデプロイ  
> 対象：幼稚園・保育園向けサイト（練習用に atago-kdg.com の構造を踏襲）

## A. 情報設計（サイトマップ）
- [ ] **トップページ**（ヒーロー / 最新お知らせ / 主要導線カード / CTA）
- [ ] **10の魅力**（固定ページ）
- [ ] **幼稚園のこと**
  - [ ] 園概要（固定）
  - [ ] 施設紹介（ギャラリー）
  - [ ] 歴史（年表）
  - [ ] 卒園生・保護者の声（CMS）
- [ ] **教育と保育**
  - [ ] 園の理念（固定）
  - [ ] 園での1日（タイムライン）
  - [ ] 年間行事（月別）
  - [ ] カリキュラム（タブ）
  - [ ] 先生の紹介（CMS）
- [ ] **入園案内**（外部リンク参照：募集要項 / 認定区分 / 保育時間・保育料 / 一時預かり）
- [ ] **子育て支援**（固定）
- [ ] **お知らせ**（一覧・詳細：CMS）
- [ ] **FAQ**（CMS：アコーディオン）
- [ ] **お問い合わせフォーム**（外部フォーム + サンクスページ）

## B. コンテンツモデル（microCMS スキーマ）
- [ ] `news`（お知らせ）: `title`(text), `body`(rich), `date`(date), `category`(select), `image`(media)
- [ ] `teachers`（先生）: `name`(text), `role`(text), `image`(media), `profile`(rich), `qa`(repeater: question/answer)
- [ ] `voices`（卒園生の声）: `name`(text, optional), `type`(select: 卒園生/保護者), `body`(rich), `image`(media?)
- [ ] `faq`（FAQ）: `question`(text), `answer`(rich), `category`(select)
- [ ] `events`（年間行事）: `month`(number 1-12), `titles`(repeater text), `images`(multi media), `description`(rich)
- [ ] `oneday`（園での1日）: `items`(repeater: time(text "07:30"等) / title / description / image)
- [ ] `globals`（単一）: `siteName`, `tel`, `fax`, `address`, `mapUrl`, `instagramUrl`, `lineQr`(media), `footerCta`(rich)
- [ ] `curriculum`（単一）: `tabs`(repeater: label / content(rich) / images)
- [ ] `about`（単一）: `philosophy`(rich), `history`(repeater: year / text), `facility`(repeater: section / text / images)

## C. ルーティング / テンプレート
- [ ] `/(top)` トップ（Hero, News3, Cards, CTA）
- [ ] `/strengths` 10の魅力（固定）
- [ ] `/about` 幼稚園のこと（親）
  - [ ] `/about/overview`
  - [ ] `/about/facilities`
  - [ ] `/about/history`
  - [ ] `/about/voices`（一覧・詳細 `/about/voices/[id]`）
- [ ] `/edu` 教育と保育（親）
  - [ ] `/edu/philosophy`
  - [ ] `/edu/day`（タイムライン）
  - [ ] `/edu/events`（年間行事）
  - [ ] `/edu/curriculum`（タブ）
  - [ ] `/edu/teachers`（一覧・詳細 `/edu/teachers/[id]`）
- [ ] `/admission` 入園案内（外部リンクまとめページ）
- [ ] `/support` 子育て支援（固定）
- [ ] `/news` お知らせ（一覧・詳細 `/news/[id]`）
- [ ] `/faq` FAQ（アコーディオン）
- [ ] `/contact` お問い合わせ（外部フォーム埋め込み or リンク / `/thanks` サンクス）

## D. UIコンポーネント
- [ ] Header（ドロップダウン / TEL / Instagram / LINE）
- [ ] Footer（住所・TEL・FAX・MAP・QR / 著作表示）
- [ ] Breadcrumbs
- [ ] SectionHeading（和文可読のサイズ）
- [ ] Card（News/Teacher/Voice 共通）
- [ ] Timeline（Day/Event 共通）
- [ ] Tabs（Curriculum）
- [ ] Gallery（Facilities/Events）
- [ ] CTA（共通フッター前に配置）

## E. 機能要件
- [ ] お知らせの新着3件をトップに表示（降順）
- [ ] 一覧はページネーション / 詳細は関連記事リンク
- [ ] FAQはカテゴリでフィルタ可能（クライアント側でOK）
- [ ] フォームは外部サービス（Formrun/Basin/Vercel Forms 等）
- [ ] サンクスページでGA4コンバージョン計測

## F. 非機能要件
- [ ] Core Web Vitals: LCP < 2.5s / CLS < 0.1 / INP < 200ms 目標
- [ ] 画像最適化（Next/Image, WebP/AVIF, lazy）
- [ ] SEO（メタ/OGP/サイトマップ/robots）
- [ ] 構造化データ（Organization/LocalBusiness/Article/FAQPage）
- [ ] アクセシビリティ（代替テキスト / 見出し階層 / フォーカス可視）
- [ ] スパム対策（reCAPTCHA v3 / honeypot）
- [ ] デプロイ: Vercel / GitHub連携 / 環境変数管理（microCMS API）

## G. 品質基準（受け入れ条件）
- [ ] 主要ページとテンプレートが要件に適合
- [ ] Lighthouse Performance 80+ / Accessibility 90+
- [ ] 構造化データの検証エラー 0
- [ ] お問い合わせ送信確認（通知・ログ）が動作（外部サービス側）
- [ ] 重要ページの末尾に共通CTAを設置
