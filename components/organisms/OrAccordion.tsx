// https://mui.com/components/buttons/#icon-button
import React from "react";
// component
import { MoIconButton } from "@/components/molecules/EntryPoint";
import { AtInputLabel } from "@/components/atoms/EntryPoint";
// mui
import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  size: ButtonSize;
  title: string;
  required: boolean;
  focused?: boolean;
  options: Option[];
  onClickEdit?: () => void;
  onClickDelete?: () => void;
};

// eslint-disable-next-line react/display-name
const OrAccordion: React.FC<Props> = React.memo(
  ({ options, required, focused, title, size, onClickEdit, onClickDelete }) => {
    return (
      <>
        <Card className="p-6">
          <div className="mb-3">
            <div className="mb-1">
              <AtInputLabel
                required={required}
                focused={focused}
                title={title}
              />
            </div>
          </div>
          {options.map((option, index: number) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="w-full flex justify-between">
                    <Typography className="flex items-center break-words">
                      <p className="text-lg font-bold">{option.title}</p>
                    </Typography>
                    <div className="mr-4">
                      <MoIconButton
                        showEdit
                        onClick={onClickEdit}
                        size={size}
                      />
                      <MoIconButton
                        showDelete
                        onClick={onClickDelete}
                        size={size}
                      />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="mb-4 break-words">
                      <p className="font-bold">概要</p>
                      {option.overview}
                    </div>
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
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Card>
      </>
    );
  }
);
export default OrAccordion;
