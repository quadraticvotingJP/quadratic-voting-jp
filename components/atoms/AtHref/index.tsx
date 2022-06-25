import React from "react";

export type Props = {
  readonly blank?: boolean;
  readonly title: string;
  readonly link: string;
};

// eslint-disable-next-line react/display-name
export const AtHref: React.FC<Props> = React.memo(
  ({ title, link, blank = false }) => {
    return blank ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    ) : (
      <a href={link} rel="noopener noreferrer">
        {title}
      </a>
    );
  }
);
