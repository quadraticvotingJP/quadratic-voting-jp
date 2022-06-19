import React from "react";
import styled from "styled-components";
// components
import { AtNoMarkLabel, AtTextField } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import { useTranslation } from "next-i18next";

export interface Props {
  readonly votes?: number;
  readonly option: VoteOption;
  readonly incrementVote: (option: VoteOption) => void;
  readonly decrementVote: (option: VoteOption) => void;
  readonly incrementButtonDisable: boolean;
  readonly decrementButtonDisable: boolean;
  readonly leftStyle: string;
  readonly rightStyle: string;
}

export const OrVoteOptionCardForm: React.FC<Props> = ({
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
      <OptionElement>
        <div key={option.id} className="mb-1">
          {/* タイトル */}
          <Section>
            <AtNoMarkLabel
              required={false}
              title={t("common.event.eventTitle.title")}
            />
            <Text>{option.title}</Text>
          </Section>
          {/* 概要 */}
          <Section>
            <AtNoMarkLabel
              required={false}
              title={t("common.event.overview.title")}
            />
            <Text>{option.overview}</Text>
          </Section>
          {/* リンク */}
          <Section>
            <AtNoMarkLabel
              required={false}
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
          </Section>
          {/* 投票数 */}
          <VoteElement>
            <AtNoMarkLabel
              required={false}
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
          </VoteElement>
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
      </OptionElement>
    </>
  );
};

const OptionElement = styled.div`
  border-radius: 0.75rem;
  border: 2px solid #e5e7eb;
  padding: 1.5rem;
  margin: 14px 0px;
`;
const Section = styled.div`
  margin-bottom: 16px;
`;
const Text = styled.p`
  font-size: 20px;
`;
const VoteElement = styled.div`
  margin-bottom: 24px;
`;
