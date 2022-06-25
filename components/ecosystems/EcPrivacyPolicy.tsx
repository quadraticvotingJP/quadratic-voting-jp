import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { AtHref } from "@/components/atoms/EntryPoint";
const P = styled.p`
  white-space: pre-wrap;
`;
const H1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const H3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const H4 = styled.h4`
  font-weight: bold;
  margin-bottom: 5px;
`;
const Link = styled.span`
  color: #4c51bf;
`;

const EcPrivacyPolicy: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <H1>{"QuadraticVoting.jp"}</H1>
      <H2>{"プライバシーポリシー"}</H2>
      <section>
        <H3>{"当サイトが使用しているアクセス解析ツールについて"}</H3>
        <P>
          {
            "当サイトでは、Google によるアクセス解析ツール「Googleアナリティクス」を利用しています。"
          }
        </P>
        <P>
          {
            "この Google アナリティクスはトラフィックデータの収集のために Cookieを使用しています。"
          }
        </P>
        <P>
          {
            "このトラフィックデータは匿名で収集されており、個人を特定するものではありません。"
          }
        </P>
        <P>
          {
            "この機能は Cookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。"
          }
        </P>
        <P>
          {"この規約に関して、詳しくは"}
          <Link>
            <AtHref
              blank={true}
              title={t("privacyPolicy.adSensePolicy.title")}
              link={t("privacyPolicy.adSensePolicy.link")}
            />
          </Link>
          {"または"}
          <Link>
            <AtHref
              blank={true}
              title={t("privacyPolicy.technology.title")}
              link={t("privacyPolicy.technology.link")}
            />
          </Link>

          {"をクリックしてください。"}
        </P>
        <br />
        <H3>{"当サイトに掲載されている広告について"}</H3>
        <H4>{"Googleアドセンス"}</H4>
        <P>
          {"当サイトでは、第三者配信の広告サービス"}
          <Link>
            <AtHref
              blank={true}
              title={t("privacyPolicy.adSense.title")}
              link={t("privacyPolicy.adSense.link")}
            />
          </Link>

          {"を利用しています。"}
        </P>
        <P>
          {
            "このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報『Cookie』(氏名、住所、メール アドレス、電話番号は\n含まれません) を使用することがあります。"
          }
        </P>
        <P>
          {
            "またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に"
          }
          <Link>
            <AtHref
              blank={true}
              title={t("privacyPolicy.technology.title")}
              link={t("privacyPolicy.technology.link")}
            />
          </Link>

          {
            "使用されないようにする方法については、こちらをクリックしてください。"
          }
        </P>
        <br />
        <H3>{"プライバリーポリシーの変更について"}</H3>
        <P>
          {
            "当サイトのプライバシーポリシーは、サイト運営上の環境の変化などに対応していくため、\n都度必要な変更を行います。"
          }
        </P>
        <P>
          {"改定を行った場合には、サイト上に掲示することでお知らせします。"}
        </P>
        <P>
          {
            "また、変更後のプライバシーポリシーについては、当サイトに掲載したときから効力が生じるものとします。"
          }
        </P>
        <br />
        <H3>{"個人情報を収集・利用する目的"}</H3>
        <P>
          {
            "当サイトではユーザの問い合わせに対応する場合に限り、ユーザの連絡先を収集・利用します。"
          }
        </P>
        <br />
        <H3>{"お問い合わせについて"}</H3>
        <P>
          {
            "本ポリシーに関するお問い合わせは、こちらのお問い合わせフォームよりお願いいたします。"
          }
        </P>
        <P>{"(お問合せフォームはGoogle Formを利用しています)"}</P>
        <Link>
          <AtHref
            blank={true}
            title={t("privacyPolicy.contact.title")}
            link={t("privacyPolicy.contact.link")}
          />
        </Link>
      </section>
    </>
  );
};
export default EcPrivacyPolicy;
