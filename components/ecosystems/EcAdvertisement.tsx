import React from "react";
type Props = {
  readonly className: string;
};
// eslint-disable-next-line react/display-name
const EcAdvertisement: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-white">広告</p>
    </div>
  );
};
export default EcAdvertisement;
