import React from "react";

type Props = {
  readonly title: string;
  readonly className?: string;
};

// eslint-disable-next-line react/display-name
const AtH2: React.FC<Props> = React.memo(
  ({ title, className = "font-bold text-3xl text-center mb-16" }) => {
    return <h2 className={className}>{title}</h2>;
  }
);
export default AtH2;
