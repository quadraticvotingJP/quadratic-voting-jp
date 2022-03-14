import React from "react";

type Props = {
  blank?: boolean;
  title: string;
  link: string;
};

// eslint-disable-next-line react/display-name
const AtAtag: React.FC<Props> = React.memo(({ title, link, blank = false }) => {
  return blank ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  ) : (
    <a href={link} rel="noopener noreferrer">
      {title}
    </a>
  );
});

export default AtAtag;
