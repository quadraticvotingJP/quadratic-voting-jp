import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

// https://maasaablog.com/development/react/1149/
// eslint-disable-next-line react/display-name
const EcLoading: React.FC = () => {
  return (
    <Loading>
      <div>
        <ReactLoading
          type="spin"
          color="#2f9bff"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Text>Loading...</Text>
      </div>
    </Loading>
  );
};
export default EcLoading;

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin-top: 10px;
  text-align: center;
`;
