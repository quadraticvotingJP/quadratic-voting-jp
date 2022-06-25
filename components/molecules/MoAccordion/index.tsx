// https://mui.com/components/buttons/#icon-button
import React from "react";
import styled from "styled-components";
// component
import { AtIconButton, AtHref } from "@/components/atoms/EntryPoint";
// mui
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type Props = {
  readonly size: Readonly<ButtonSize>;
  readonly option: Readonly<Option>;
  readonly onClickEdit?: () => void;
  readonly onClickDelete?: () => void;
  readonly disabled: boolean;
};

// eslint-disable-next-line react/display-name
export const MoAccordion: React.FC<Props> = React.memo(
  ({ option, size, onClickEdit, onClickDelete, disabled }) => {
    return (
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <OptionElement>
              <TitleElement>
                <Title>{option.title}</Title>
              </TitleElement>
              <IconButtonElement>
                <AtIconButton
                  showEdit
                  onClick={onClickEdit}
                  size={size}
                  disabled={disabled}
                />
                <AtIconButton
                  showDelete
                  onClick={onClickDelete}
                  size={size}
                  disabled={disabled}
                />
              </IconButtonElement>
            </OptionElement>
          </AccordionSummary>
          <AccordionDetails>
            {option.overview && (
              <Overview>
                <Title>概要</Title>
                {option.overview}
              </Overview>
            )}
            {option.url && (
              <div>
                <Title>リンク</Title>
                <Link>
                  <AtHref blank={true} title={option.url} link={option.url} />
                </Link>
              </div>
            )}
            {!option.url && !option.overview && (
              <div>
                <Title>概要とリンクは登録されていません。</Title>
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      </>
    );
  }
);
const OptionElement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TitleElement = styled.div`
  display: flex;
  align-items: center;
  word-break: break-word;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const IconButtonElement = styled.div`
  display: flex;
  margin-right: 10px;
`;
const Overview = styled.div`
  margin-bottom: 14px;
  word-break: break-word;
`;
const Link = styled.div`
  color: #4c51bf;
`;
