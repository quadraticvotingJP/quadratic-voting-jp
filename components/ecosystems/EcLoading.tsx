import React from "react";

type Props = {
  readonly className: string;
};
// eslint-disable-next-line react/display-name
const EcLoading: React.FC<Props> = ({ className }) => {
  return <div className={className}>loading</div>;
};
export default EcLoading;
