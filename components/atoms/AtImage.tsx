// https://zenn.dev/nbr41to/articles/365e8105efa448
import React from "react";
import Image, { ImageLoader } from "next/image";

type Props = {
  readonly src: string;
  readonly alt: string;
  readonly layout:
    | "fixed"
    | "fill"
    | "intrinsic"
    | "responsive"
    | "raw"
    | undefined;
  readonly loader?: ImageLoader;
  readonly objectFit?: any;
  readonly width?: number;
  readonly height?: number;
};

// eslint-disable-next-line react/display-name
const AtImage: React.FC<Props> = React.memo(
  ({ src, alt, layout = "fill", loader, objectFit, width, height }) => {
    return (
      <Image
        src={src}
        alt={alt}
        layout={layout}
        loader={loader}
        objectFit={objectFit}
        width={width}
        height={height}
      />
    );
  }
);
export default AtImage;
