import { Card } from "@mui/material";
import React from "react";

// components
import { AtInputLabelNoMark } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import { useTranslation } from "next-i18next";

interface Props {
  readonly votes?: number;
  readonly option: VoteOption;
  readonly incrementVote: (option: VoteOption) => void;
  readonly decrementVote: (option: VoteOption) => void;
  readonly incrementButtonDisable: boolean;
  readonly decrementButtonDisable: boolean;
}

const OrVoteOptionCardForm: React.FC<Props> = ({
  option,
  incrementVote,
  decrementVote,
  incrementButtonDisable,
  decrementButtonDisable,
}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="mb-3 border-2 p-6 mt-6 rounded-xl">
        <div key={option.id} className="mb-1">
          {/* タイトル */}
          <div className="mb-3">
            <AtInputLabelNoMark
              required={false}
              focused={false}
              title={t("common.event.eventTitle.title")}
            />
            <p>{option.title}</p>
          </div>
          {/* 概要 */}
          <div className="mb-3">
            <AtInputLabelNoMark
              required={false}
              focused={false}
              title={t("common.event.overview.title")}
            />
            <p>{option.overview}</p>
          </div>
          {/* リンク */}
          <div className="mb-3">
            <AtInputLabelNoMark
              required={false}
              focused={false}
              title={t("common.event.createOption.optionLink")}
            />
            <p className="border-2 p-3 rounded-xl overflow-clamp inputForm">
              {option.url}
            </p>
          </div>
          {/* 投票数 */}
          <div className="mb-6">
            <AtInputLabelNoMark
              required={false}
              focused={false}
              title={t("common.event.votes.title")}
            />
            <p className="border-2 p-3 rounded-xl overflow-clamp inputForm">
              {option.vote}
            </p>
          </div>
          <MoButtons
            left={{
              title: "-",
              disabled: incrementButtonDisable,
              onClick: () => decrementVote(option),
            }}
            right={{
              title: "+",
              disabled: decrementButtonDisable,
              onClick: () => incrementVote(option),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OrVoteOptionCardForm;
