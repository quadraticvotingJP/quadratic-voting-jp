// https://omkz.net/next-seo/
// https://docs.google.com/spreadsheets/d/1f7g12CbIRZtoraalvIyShbXJ2-4XHI6wz6Rom3TFk5o/edit#gid=1376269407
export const SEO = {
  // タブに表示されるタイトル
  defaultTitle:
    "民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】",
  // デフォルトの説明
  description:
    "QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。",
  //【共通】
  additionalMetaTags: [
    {
      name: "application-name",
      content: "QuadraticVoting.jp",
    },
  ],
  // 【共通】キーワード
  keywords: "投票,1人1票,民主主義,オードリータン",
  // TwitterやFacebookなどのSNSでシェアした時や、LINEなどのチャットツールでサイトURLを送信した時に表示される、タイトルや説明文、画像を用いて、簡潔にWebページの内容
  openGraph: {
    locale: "ja_JP", //【共通】
    site_name: "QuadraticVoting.jp", //【共通】
    type: "website", //【共通】
    title:
      "民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】",
    description:
      "QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。",
    url: "https://quadraticvoting.jp/",
    //【共通】
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/quadraticvotingjp-develop.appspot.com/o/lp%2F12_seo.jpg?alt=media&token=13f98ddd-1dd8-4867-81ba-7f2f3ef7cde1", //【共通】
        width: 800, //【共通】
        height: 600, //【共通】
        alt: "QuadraticVoting.jp", //【共通】
        type: "image/jpeg", //【共通】
      },
    ],
  },
  twitter: {
    handle: "@quadraticV_jp", //【共通】
    site: "@quadraticV_jp", //【共通】
    cardType: "summary", //【共通】
  },
};
