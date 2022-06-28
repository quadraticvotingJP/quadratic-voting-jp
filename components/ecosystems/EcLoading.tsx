import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import ReactLoading from "react-loading";

// https://maasaablog.com/development/react/1149/
// eslint-disable-next-line react/display-name
const EcLoading: React.FC = () => {
  return (
    <Loading>
      <div>
        <ReactLoading
          type="spin"
          color={`${BASE_CSS.color.base}`}
          width={100}
          height={100}
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
