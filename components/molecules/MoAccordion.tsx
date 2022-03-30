// https://mui.com/components/buttons/#icon-button
import React from "react";
// component
import { AtIconButton } from "@/components/atoms/EntryPoint";
// mui
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  size: ButtonSize;
  option: Option;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  disabled: boolean;
};

// eslint-disable-next-line react/display-name
const MoAccordion: React.FC<Props> = React.memo(
  ({ option, size, onClickEdit, onClickDelete, disabled }) => {
    return (
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="w-full flex justify-between">
              <div className="flex items-center break-words">
                <p className="text-lg font-bold">{option.title}</p>
              </div>
              <div className="mr-4">
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
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {option.overview && (
              <div className="mb-4 break-words">
                <p className="font-bold">概要</p>
                {option.overview}
              </div>
            )}
            {option.url && (
              <div>
                <p className="font-bold">リンク</p>
                <a
                  className="text-blue-500"
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.url}
                </a>
              </div>
            )}
            {!option.url && !option.overview && (
              <div>
                <p className="font-bold">概要とリンクは登録されていません。</p>
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      </>
    );
  }
);
export default MoAccordion;
