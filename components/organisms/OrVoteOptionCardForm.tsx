import { Card } from "@mui/material";
import React from "react";

// components
import { MoButtons } from "@/components/molecules/EntryPoint";
import { AtInputLabel, AtInput } from "@/components/atoms/EntryPoint";
import { useTranslation } from "next-i18next";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  title: string;
  options: Option[];
  register?: UseFormRegisterReturn;
}

const OrVoteOptionCardForm: React.FC<Props> = React.memo(
  ({ title, options, register }) => {
    const { t } = useTranslation("common");

    return (
      <>
        <Card className="p-6">
          <div className="mb-3">
            <div className="mb-1">
              <AtInputLabel required={false} focused={false} title={title} />
              {options.map((option: Option, index: number) => {
                return (
                  <>
                    <Card className="p-6 my-6">
                      {/* タイトル */}
                      <div className="mb-3">
                        <AtInputLabel
                          key={index}
                          required={false}
                          focused={false}
                          title={t("common.event.eventTitle.title")}
                        />
                        <p>{option.title}</p>
                      </div>
                      {/* 概要 */}
                      <div className="mb-3">
                        <AtInputLabel
                          key={index}
                          required={false}
                          focused={false}
                          title={t("common.event.overview.title")}
                        />
                        <p>{option.overview}</p>
                      </div>
                      {/* リンク */}
                      <div className="mb-3">
                        <AtInputLabel
                          key={index}
                          required={false}
                          focused={false}
                          title={t("common.event.createOption.optionLink")}
                        />
                        <p>{option.url}</p>
                      </div>
                      {/* 投票数 */}
                      <div className="mb-3">
                        <AtInputLabel
                          key={index}
                          required={false}
                          focused={false}
                          title={t("common.event.votes.title")}
                        />
                      </div>
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
