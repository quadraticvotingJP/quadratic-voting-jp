import { Card } from "@mui/material";
import React from "react";

// components
import { MoButtons } from "@/components/molecules/EntryPoint";
import { AtInputLabel } from "@/components/atoms/EntryPoint";

interface Props {
  title: string;
  options: Option[];
}

const OrVoteOptionCardForm: React.FC<Props> = React.memo(
  ({ title, options }) => {
    return (
      <>
        <Card className="p-6">
          <div className="mb-3">
            <div className="mb-1">
              <AtInputLabel required={false} focused={false} title={title} />
              {options.map((option: Option, index: number) => {
                return (
                  <>
                    <Card className="p-6">
                      <AtInputLabel
                        key={index}
                        required={false}
                        focused={false}
                        title={option.title}
                      />
                      <MoButtons
                        left={{
                          title: "-",
                          disabled: false,
                          onClick: () => {},
                        }}
                        right={{
                          title: "+",
                          disabled: false,
                          onClick: () => {},
                        }}
                      />
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </Card>
      </>
    );
  }
);

export default OrVoteOptionCardForm;
