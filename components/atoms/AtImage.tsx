// https://zenn.dev/nbr41to/articles/365e8105efa448
import React from "react";
import Image from "next/image";

type Props = {
  readonly className: string;
  readonly src: string;
  readonly alt: string;
  readonly layout:
    | "fixed"
    | "fill"
    | "intrinsic"
    | "responsive"
    | "raw"
    | undefined;
};

// eslint-disable-next-line react/display-name
const AtImage: React.FC<Props> = React.memo(
  ({ className, src, alt, layout = "fill" }) => {
    return <Image className={className} src={src} alt={alt} layout={layout} />;
  }
);
export default AtImage;
