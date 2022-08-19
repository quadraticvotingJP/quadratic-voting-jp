import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AtImage } from "@/components/atoms/EntryPoint";
import styled from "styled-components";

type Props = {
  readonly format: "horizontal" | "auto" | "vertical";
  readonly adSense?: boolean;
  readonly a8netOnamae120x600?: boolean;
  readonly a8netOnamae468x60?: boolean;
  readonly a8netOnamae300x300?: boolean;
  readonly a8netOZUBI300x250?: boolean;
  readonly a8netXSERVER300x250?: boolean;
  readonly a8netLoli300x300?: boolean;
  readonly a8netA8300x250?: boolean;
};
// eslint-disable-next-line react/display-name
const EcAdSense: React.FC<Props> = ({
  format,
  adSense = false,
  a8netOnamae120x600 = false,
  a8netOnamae468x60 = false,
  a8netOnamae300x300 = false,
  a8netOZUBI300x250 = false,
  a8netXSERVER300x250 = false,
  a8netLoli300x300 = false,
  a8netA8300x250 = false,
}) => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("adsbygoogle.push() error:", err);
    }
  }, [asPath]);

  return (
    <>
      {adSense && (
        // https://b.0218.jp/202104021830.html
        // https://ez-net.jp/article/33/gSkGkq1B/v6f4-wLVfjLD/
        <AsPath key={asPath} className="adsbygoogle">
          <ins
            className="adsbygoogle"
            style={{ display: "block", textAlign: "center" }}
            data-ad-layout="in-article"
            data-adtest="off" // test mode
            data-ad-format={format}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENCE_PUB}
            data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_ADSENCE_SLOT}
            data-full-width-responsive="true"
          />
        </AsPath>
      )}
      {a8netOnamae120x600 && (
        <a href={process.env.NEXT_PUBLIC_A8ONAMAE120X600_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8ONAMAE120X600_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={120}
            height={600}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8ONAMAE120X600_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
      {a8netOnamae468x60 && (
        <a href={process.env.NEXT_PUBLIC_A8ONAMAE468X60_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8ONAMAE468X60_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={468}
            height={60}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8ONAMAE468X60_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
      {a8netOnamae300x300 && (
        <a href={process.env.NEXT_PUBLIC_A8ONAMAE300X300_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8ONAMAE300X300_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={300}
            height={300}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8ONAMAE300X300_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
      {a8netOZUBI300x250 && (
        <a href={process.env.NEXT_PUBLIC_A8OZUBI300X250_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8OZUBI300X250_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={300}
            height={250}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8OZUBI300X250_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
      {a8netXSERVER300x250 && (
        <a href={process.env.NEXT_PUBLIC_A8XSERVER300X250_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8XSERVER300X250_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={300}
            height={250}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8XSERVER300X250_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
      {a8netLoli300x300 && (
        <a href={process.env.NEXT_PUBLIC_A8LOLI300X300_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8LOLI300X300_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={300}
            height={300}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8LOLI300X300_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
      {a8netA8300x250 && (
        <a href={process.env.NEXT_PUBLIC_A8A8300X250_A} rel="nofollow">
          <AtImage
            src={process.env.NEXT_PUBLIC_A8A8300X250_A_IMAGE1!}
            alt="a8"
            layout="intrinsic"
            width={300}
            height={250}
          />
          <AtImage
            src={process.env.NEXT_PUBLIC_A8A8300X250_A_IMAGE2!}
            alt="a8"
            layout="intrinsic"
            width={1}
            height={1}
          />
        </a>
      )}
    </>
  );
};
export default EcAdSense;

const AsPath = styled.div`
  min-width: 400px;
`;
