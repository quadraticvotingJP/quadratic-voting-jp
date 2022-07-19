// 画面component
import React, { ReactNode } from "react";
// styled components
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";

const Overlay = styled.div`
  /*　画面全体を覆う設定　*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /*　画面の中央に要素を表示させる設定　*/
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  z-index: 2;
  width: 30%;
  background-color: ${BASE_CSS.color.white};
  border-radius: 10px;
  ${tab`
  `}
  ${sp`
    width: 70%;
  `}
`;
const TitleElement = styled.div`
  padding: 20px 22px;
  border-radius: 10px 10px 0px 0px;
  background-color: ${BASE_CSS.color.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;
const Title = styled.span`
  color: ${BASE_CSS.color.white};
  font-weight: bold;
`;
const ContentElement = styled.div`
  margin-top: 30px;
  padding: 30px;
`;

export type OrModalProps = {
  readonly children?: ReactNode;
  readonly title: string;
  readonly open: boolean;
  readonly close: () => void;
};

// eslint-disable-next-line react/display-name
export const Presentation: React.FC<OrModalProps> = React.memo(
  ({ children, open = false, close, title }) => {
    if (open) {
      return (
        <>
          <Overlay onClick={close}>
            <Modal>
              <TitleElement>
                <Title>{title}</Title>
              </TitleElement>
              <ContentElement>{children}</ContentElement>
            </Modal>
          </Overlay>
        </>
      );
    } else {
      return null;
    }
  }
);
