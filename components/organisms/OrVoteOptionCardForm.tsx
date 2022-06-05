import React from "react";

// components
import { AtInputLabelNoMark, AtTextField } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import { useTranslation } from "next-i18next";

interface Props {
  readonly votes?: number;
  readonly option: VoteOption;
  readonly incrementVote: (option: VoteOption) => void;
  readonly decrementVote: (option: VoteOption) => void;
  readonly incrementButtonDisable: boolean;
  readonly decrementButtonDisable: boolean;
  readonly leftStyle: string;
  readonly rightStyle: string;
}

const OrVoteOptionCardForm: React.FC<Props> = ({
  option,
  incrementVote,
  decrementVote,
  incrementButtonDisable,
  decrementButtonDisable,
  leftStyle,
  rightStyle,
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
            <AtTextField
              type="url"
              id={option.url}
              defaultValue={option.url ? option.url : "-"}
              InputProps={{
                readOnly: true,
                className: "rounded-xl",
              }}
              className={"w-full"}
              name={option.url}
              multiline={false}
            />
          </div>
          {/* 投票数 */}
          <div className="mb-6">
            <AtInputLabelNoMark
              required={false}
              focused={false}
              title={t("common.event.votes.title")}
            />
            <AtTextField
              type="text"
              id={`${option.vote}-vote`}
              value={option.vote}
              InputProps={{
                readOnly: true,
                className: "rounded-xl",
              }}
              className={"w-full"}
              name={`${option.vote}-vote`}
            />
          </div>
          <MoButtons
            leftStyle={leftStyle}
            rightStyle={rightStyle}
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
