import React, { useEffect } from "react";
import { useRouter } from "next/router";
type Props = {
  readonly className: string;
  readonly format: string;
};
// eslint-disable-next-line react/display-name
const EcAdSense: React.FC<Props> = ({ className, format }) => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, [asPath]);
  return (
    <div className={className}>
      <div key={asPath}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format={format}
          data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENCE_PUB}
          data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_ADSENCE_SLOT}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};
export default EcAdSense;
