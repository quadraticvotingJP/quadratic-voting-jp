import React from "react";

type Props = {
  readonly title: string;
};

// eslint-disable-next-line react/display-name
const AtH2: React.FC<Props> = React.memo(({ title }) => {
  return <h2 className="text-center mb-16 text-4xl font-bold">{title}</h2>;
});
export default AtH2;
