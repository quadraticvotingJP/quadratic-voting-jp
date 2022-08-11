// https://mui.com/components/buttons/#icon-button
import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// component
import { AtIconButton, AtHref } from "@/components/atoms/EntryPoint";
import { OverView } from "@/components/shared/EntryPoint";

// mui
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// react hook form
import { UseFormWatch } from "react-hook-form";

export type Props = {
  readonly field: any;
  readonly index: number;
  readonly optionSelected: (index: number) => void;
  readonly removeOption: (index: number) => void;
  readonly selectedFormIndex: number;
  readonly watch: UseFormWatch<EventValues>;
};

// eslint-disable-next-line react/display-name
export const MoAccordion: React.FC<Props> = React.memo(
  ({
    field,
    optionSelected,
    removeOption,
    index,
    selectedFormIndex,
    watch,
  }) => (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <OptionElement>
            <TitleElement>
              <Title>{field.title}</Title>
            </TitleElement>
            <IconButtonElement>
              <AtIconButton
                showEdit
                onClick={() => optionSelected(index)}
                size={"large"}
                disabled={watch(`options.${selectedFormIndex}.title`) === ""}
              />
              <AtIconButton
                showDelete
                onClick={() => removeOption(index)}
                size={"large"}
                disabled={
                  index === 0 ||
                  watch(`options.${selectedFormIndex}.title`) === ""
                }
              />
            </IconButtonElement>
          </OptionElement>
        </AccordionSummary>
        <AccordionDetails>
          {field.overview && (
            <OverView>
              <Title>補足</Title>
              <Text>{field.overview}</Text>
            </OverView>
          )}
          {field.url && (
            <div>
              <Title>リンク</Title>
              <Link>
                <AtHref blank={true} title={field.url} link={field.url} />
              </Link>
            </div>
          )}
          {!field.url && !field.overview && (
            <div>
              <Title>補足とリンクは登録されていません。</Title>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  )
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
  ${tab`
  `}
  ${sp`
    font-size: 16px;
  `}
`;
const IconButtonElement = styled.div`
  display: flex;
  margin-right: 10px;
  ${tab`
  `}
  ${sp`
    flex-direction: column;
  `}
`;
const Link = styled.div`
  color: ${BASE_CSS.link.color};
  word-break: break-word;
`;
const Text = styled.div`
  word-break: break-word;
`;
