import { Card } from "@mui/material";
import React, { useState } from "react";

// components
import { AtInputLabel } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import { useTranslation } from "next-i18next";

interface Props {
  title: string;
  votes?: number;
  option: VoteOption;
  onClick?: () => void;
}

const OrVoteOptionCardForm: React.FC<Props> = React.memo(
  ({ title, option, onClick }) => {
    const { t } = useTranslation("common");

    return (
      <>
        <Card className="p-6">
          <div className="mb-3">
            <div className="mb-1">
              <AtInputLabel required={false} focused={false} title={title} />
              <Card key={option.id} className="p-6 my-6">
                {/* タイトル */}
                <div className="mb-3">
                  <AtInputLabel
                    required={false}
                    focused={false}
                    title={t("common.event.eventTitle.title")}
                  />
                  <p>{option.title}</p>
                </div>
                {/* 概要 */}
                <div className="mb-3">
                  <AtInputLabel
                    required={false}
                    focused={false}
                    title={t("common.event.overview.title")}
                  />
                  <p>{option.overview}</p>
                </div>
                {/* リンク */}
                <div className="mb-3">
                  <AtInputLabel
                    required={false}
                    focused={false}
                    title={t("common.event.createOption.optionLink")}
                  />
                  <p>{option.url}</p>
                </div>
                {/* 投票数 */}
                <div className="mb-3">
                  <AtInputLabel
                    required={false}
                    focused={false}
                    title={t("common.event.votes.title")}
                  />
                  <p>{option.vote}</p>
                </div>
                <MoButtons
                  left={{
                    title: "-",
                    disabled: false,
                    onClick: () => {
                      onClick;
                    },
                    // onClick: () => {
                    //   incrementDecrementVote(option, "-");
                    // },
                  }}
                  right={{
                    title: "+",
                    disabled: false,
                    onClick: () => {
                      onClick;
                    },
                  }}
                />
              </Card>
            </div>
          </div>
        </Card>
      </>
    );
  }
);

export default OrVoteOptionCardForm;
