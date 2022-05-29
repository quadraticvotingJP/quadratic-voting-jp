import React from "react";

type Props = {
  readonly blank?: boolean;
  readonly title: string;
  readonly link: string;
  readonly className?: string;
};

// eslint-disable-next-line react/display-name
const AtHref: React.FC<Props> = React.memo(
  ({ title, link, className, blank = false }) => {
    return blank ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {title}
      </a>
    ) : (
      <a href={link} rel="noopener noreferrer" className={className}>
        {title}
      </a>
    );
  }
);

export default AtHref;
