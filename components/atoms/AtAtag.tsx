import React from "react";

type Props = {
  title: string;
  link: string;
};

// eslint-disable-next-line react/display-name
export const AtAtag: React.FC<Props> = React.memo(({ title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
});
