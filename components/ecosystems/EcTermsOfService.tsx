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

const EcTermsOfService: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <H1>{"QuadraticVoting.jp"}</H1>
      <H2>{"利用規約"}</H2>
      <H3>{"はじめに"}</H3>
      <P>
        {
          "この利用規約（以下、「本規約」と言います。）は、「QuadraticVoting.jp」（以下、「当サイト」と言います）\nを利用する際の全ての行為について適用されます。"
        }
      </P>
      <P>
        {
          "利用者が当サイトを利用する場合は、本規約のすべての項目に同意し、利用契約を締結したものと見なします"
        }
      </P>
      <br />
      <H3>{"著作権"}</H3>
      <P>
        {
          "当サイトに掲載している文章・画像・プログラムなどの一部または全てについて、\n無断で、転載や複製、収集、再利用、アップロードなどすることは、著作権法によって禁止されています。"
        }
      </P>
      <br />
      <H3>{"禁止行為"}</H3>
      <P>{"当サイトに対して、不当にアクセス負荷をかける行為を禁止します。"}</P>
      <P>
        {
          "また、その他、当サイトに損害が出る可能性のある、一切の行為を禁止します。"
        }
      </P>
      <br />
      <H3>{"損害賠償"}</H3>
      <P>
        {
          "利用者または利用者の関係者が、本規約に違反する行為により当サイトに損害を与えた場合、\n利用者は当サイトに対しその損害を賠償するものとします。"
        }
      </P>
      <br />
      <H3>{"免責事項"}</H3>
      <P>{"当サイトのご利用は自己責任でお願い致します。"}</P>
      <P>
        {
          "当サイトのご利用によって何らかの被害や損害を被った場合でも、当サイトは一切責任を負わないものとします。"
        }
      </P>
      <P>
        {
          "当サイトの利用における、第三者との紛争に関しては、\n利用者が自らその責任と費用負担において解決するものとし、当サイトは一切責任を負わないものとします。"
        }
      </P>
      <br />
      <H3>{"連絡先"}</H3>
      <P>{"お問い合わせは下記よりご連絡をお願いいたします。"}</P>
      <P>{"(お問合せフォームはGoogle Formを利用しています)"}</P>
      <AtHref
        blank={true}
        title={t("privacyPolicy.contact.title")}
        link={t("privacyPolicy.contact.link")}
        className="text-blue-500"
      />
      <br />
      <H3>{"その他"}</H3>
      <P>{"本規約は、事前の予告なしに改訂することがあります。"}</P>
      <P>
        {"すでに締結された利用契約にも、変更後の本規約を適用できるものとします"}
      </P>
      <P>
        {
          "本規約に関する紛争について、利用者は誠意をもって協議の上これを解決するものとします。"
        }
      </P>
      <P>
        {
          "裁判上の紛争が生じた場合は、東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。"
        }
      </P>
      <br />
    </>
  );
};
export default EcTermsOfService;
