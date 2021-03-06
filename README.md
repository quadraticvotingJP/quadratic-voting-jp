# quadratic-voting-jp Document

## quadratic-voting-jp のインストールと立ち上げ

任意のディレクトリで下記を実行

1. clone

```
git clone git@github.com:quadraticvotingJP/quadratic-voting-jp.git
```

2. パッケージのインストール

```
yarn install
```

3. local の立ち上げ

```
yarn dev
```

4. localhost にアクセス

```
http://localhost:4000
```

## 使用技術

### フロントエンド

- Next.js 12.1.0
- TypeScript 4.6.2

### Firebase

- Firebase - Authentication(認証)
- Firebase - FireStore(DB)
- Firebase - Storage(画像)

### デプロイ

[vercel](https://vercel.com/)

### Component

[storybook](https://storybook.js.org/)

### css

[styled-components](https://styled-components.com/)

### Test
- [jestjs](https://jestjs.io/ja/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### パッケージ管理

[renovate](https://www.npmjs.com/package/renovate)

### その他

- axios
- react-hook-form
- Material UI

## ディレクトリ構成

```
quadratic-voting-jp
 ├── architecture 　　　　　　 ロジックを記述
 │── components　　　　　　　　 AtomicDesignの画面componentを格納
 ├── pages 　　　　　　　　　　　画面
 ├── styles 　　　　　　　　　　 共通のCSSを格納
 ├── types 　　　　　　　　　　　グローバルなtypescriptを定義

```

**※詳しくは各ディレクトリの README.md を参照してください**

## デザイン

- [Figma](https://www.figma.com/file/IdmP8Caxdqb8NCG7BMrjRL/QuadraticVoarding.jp?node-id=159%3A206)

## ルール

### ブランチ名

feature-issue#[github の issue 番号]-[行う内容]

例：feature-issue#52-update-readme

### コミットメッセージ

github の Code タブにて commit 内容と issue を紐付けるため下記ルールで commit する

git commit -m "行ったことの内容 #issue 番号"

※ コミットメッセージと#の間は**半角スペースをいれる**

例：git commit -m "README.md の更新 #52"

### GitHub

#### ブランチ運用
- `main` ブランチ → 本番ブランチ
- `hotfix` ブランチ → 本番環境のバグ対応

  ※詳細
  1. 対応後`hotfix`を`main`へmerge
  1. `main`へマージ後、`hotfixをdevelopへmerge`
  1. `develop`へマージ後、`hotfix`を`develop-ver〇〇`へmerge
  1. `hotfix`ブランチを削除
  1. `main`ブランチを対象にタグを新規作成

      作成するタグはマイナーバージョンを1上げること（v1.0.○）

- `develop` ブランチ → 検証環境ブランチ

- `release` ブランチ → 本番環境の修正対応

   ※詳細
   1. 本番環境の修正が必要なタイミングで`develop`から作成
   1. 対応後`develop`へmerge
   1. `develop`へmerge後、`main`へmerge
   1. `main`へmerge後、`develop-ver〇〇`へmerge
   1. ブランチ削除
   1. `main`ブランチを対象にタグを新規作成

      作成するタグはミドルバージョンを1上げること（v1.○.0）

- `develop-ver${対象バージョン}` → ネクストフェーズのブランチ対応
   ※詳細
   1. フェーズごとに作成
   1. 各種フェーズの対応が完了後`develop`へmerge
   1. `develop`へmerge後、`main`へmerge
   1. `main`へmerge後、ブランチ削除
   1. `main`ブランチを対象にタグを新規作成

      作成するタグはメジャーバージョンを1上げること（v○.0.0）

![brunch](https://user-images.githubusercontent.com/42969626/177020323-f3518a68-969d-48f5-8f14-35b1536d9349.png)




#### プルリクスト作成

1. [Create pull request]を押下
1. Feature request 欄の[Get started]をクリック
1. 右カラムの `Assignees`で作業者を指定（とりあえず起票する場合は未選択も可）
1. 右カラムの `Labels`を選択
   1. 新規製造なら`enhancement`
   1. component 製造ならアトミックデザインの階層タグ (`Atom`など)
   1. 複数付与可
1. 右カラムの `Projects`で`quadratic-voting-jp`を選択
1. 右カラムの `Development`で該当する`issue`を選択
1. 例：<img width="346" alt="スクリーンショット 2022-04-19 21 26 59" src="https://user-images.githubusercontent.com/55649762/164003401-4ee628c1-8700-413a-8560-7b180ea94bc0.png">

#### issue 起票

1. [Issues](https://github.com/quadraticvotingJP/quadratic-voting-jp/issues)タブから[New issue]をクリック
1. Feature request 欄の[Get started]をクリック
1. 右カラムの `Assignees`で作業者を指定（とりあえず起票する場合は未選択も可）
1. 右カラムの `Labels`を選択
   1. 新規製造なら`enhancement`
   1. component 製造ならアトミックデザインの階層タグ (`Atom`など)
   1. 複数付与可
1. 右カラムの `Projects`で`quadratic-voting-jp`を選択
1. 左カラムの`Title`,`Write`を埋める
1. [Submit new issue]をクリック
1. 例：<img width="356" alt="スクリーンショット 2022-04-19 21 28 44" src="https://user-images.githubusercontent.com/55649762/164003624-3e8b45cb-58d1-4422-83e2-06c73dc8ceea.png">

#### カンバン

1. [カンバン](https://github.com/quadraticvotingJP/quadratic-voting-jp/projects/1)にアクセス
1. To do から作業するタスクを In progress に移動させる
1. `Assignees`がついてない場合は担当者をつける
1. ※`Assignees`以降のタスク移動はマージなど自動で移動する
