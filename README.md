# Kondate 今日のディナーをサポート

夜ご飯は何を作ろう...？材料って何があった...？

このもやもやを解消します！

**今ある材料から、好きな食材を優先して、今日の夜ご飯レシピを考えます！**

### 主な機能

初期設定

- ユーザー・家族の好きな食材を登録
- 冷蔵庫にある食材を登録

日頃の利用

- 今ある食材から作れそうなレシピを提案
  - 作り方はレシピページで確認できる！
  - 作ったらワンクリックで在庫を減らす！
- 買い物リストモードも搭載
  - 以前の買い物から現在までに使った食材はリストで表示します！
  - そのほかに買ったものは追加できます！

### デプロイ先 URL

デプロイ後に追記

# ディレクトリ構成

```
.
├── client // クライアントReactプロジェクトディレクトリ
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── assets/ 　    // クライアント表示用アセットディレクトリ
│   │   ├── components/  // Reactコンポーネント群
│   │   ├── App.jsx
│   │   ├── firebase.js  // クライアント認証設定用
│   │   └── main.jsx
│   └── vite.config.js
├── package-lock.json
├── package.json
├── README.md
└── src // サーバー用ディレクトリ
    └── server.js
```

# 開発用セットアップ

1. このリポジトリをクローンする
   `git clone git@github.com:dig-9-team-h2mk/kondate-app.git`
2. ローカルのリポジトリに移動する
   `cd kondate-app`
3. サーバー側の関連パッケージをインストールする
   `npm install`
4. 開発用サーバーを起動する
   `npm run dev`
5. 別のターミナルでディレクトリ client に移動する
   `cd client`
6. クライアント側の関連パッケージをインストールする
   `npm install`
7. フロントエンド開発用 vite サーバーを起動する
   `npm run dev`

# Wiki リンク（プロジェクトルール等）

- [ブランチ戦略・プルリクエストのルール](https://github.com/dig-9-team-h2mk/kondate-app/wiki/Branch%E6%88%A6%E7%95%A5)
- [コミットルール]()
- [ビルド方法]()
- [DB スキーマ](https://github.com/dig-9-team-h2mk/kondate-app/wiki/kondateDB%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%9E)
