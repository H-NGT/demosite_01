# demosite_01

オークボデンキのデモサイトを GitHub Pages に公開するための、Vite + React + Tailwind CSS 構成のフロントエンドプロジェクトです。

Claude などで生成した HTML / Tailwind コードを取り込み、静的サイトとしてすばやくビルド・公開できることを目的にしています。

## 使用技術

- Vite
- React
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## 初回セットアップ

```bash
npm install
```

## ローカル開発

```bash
npm run dev
```

起動後、ターミナルに表示される URL をブラウザで開いて確認してください。

## 本番ビルド

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

## プレビュー

```bash
npm run preview
```

`dist/` に出力された本番ビルドをローカルで確認できます。

## GitHub Pages への公開

`main` ブランチに push すると、GitHub Actions が自動で以下を実行します。

1. 依存パッケージのインストール
2. 本番ビルド
3. `dist/` の GitHub Pages へのデプロイ

GitHub リポジトリ側の Pages 設定は、必要に応じて Source を `GitHub Actions` にしてください。

## Claude HTML / Tailwind コードの反映先

React JSX として移植する場合は `src/App.jsx` を編集してください。

Tailwind CSS は `src/styles.css` で読み込み済みです。

主な編集対象は以下です。

- `src/App.jsx`: 画面本体の React コンポーネント
- `src/styles.css`: Tailwind CSS の読み込みと共通 CSS
- `index.html`: HTML のメタ情報やページタイトル

## ディレクトリ構成

```text
.
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── tailwind.config.js
└── vite.config.js
```
