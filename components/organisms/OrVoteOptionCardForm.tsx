import { Card } from "@mui/material";
import React from "react";

// components
import { AtInputLabel } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import { useTranslation } from "next-i18next";

interface Props {
  readonly votes?: number;
  readonly option: VoteOption;
  readonly incrementVote: (option: VoteOption) => void;
  readonly decrementVote: (option: VoteOption) => void;
}

const OrVoteOptionCardForm: React.FC<Props> = ({
  option,
  incrementVote,
  decrementVote,
}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="mb-3">
        <div className="mb-1">
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
                onClick: () => decrementVote(option),
              }}
              right={{
                title: "+",
                disabled: false,
                onClick: () => incrementVote(option),
              }}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default OrVoteOptionCardForm;
