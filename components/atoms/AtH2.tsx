import React from "react";

type Props = {
  title: string;
};

// eslint-disable-next-line react/display-name
const AtH2: React.FC<Props> = React.memo(({ title }) => {
  return <h2 className="font-bold">{title}</h2>;
});
export default AtH2;
