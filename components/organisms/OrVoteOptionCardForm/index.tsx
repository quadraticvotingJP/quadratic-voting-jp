import React from "react";
import styled from "styled-components";
import { sp, tab } from "@/media";
import { BASE_CSS } from "@/utils/baseCss";
// components
import { AtNoMarkLabel, AtHref } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import { useTranslation } from "next-i18next";

export interface Props {
  readonly votes?: number;
  readonly option: VoteOption;
  readonly incrementVote: (option: VoteOption) => void;
  readonly decrementVote: (option: VoteOption) => void;
  readonly incrementButtonDisable: boolean;
  readonly decrementButtonDisable: boolean;
}

export const OrVoteOptionCardForm: React.FC<Props> = ({
  option,
  incrementVote,
  decrementVote,
  incrementButtonDisable,
  decrementButtonDisable,
}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <OptionElement>
        <Option key={option.id}>
          {/* タイトル */}
          <Section>
            <AtNoMarkLabel
              required={false}
              title={t("common.event.eventTitle.title")}
            />
            <Text>{option.title}</Text>
          </Section>
          {/* 概要 */}
          {option.overview && (
            <Section>
              <AtNoMarkLabel
                required={false}
                title={t("common.event.overview.title")}
              />
              <Text>{option.overview}</Text>
            </Section>
          )}
          {/* リンク */}
          {option.url && (
            <Section>
              <AtNoMarkLabel
                required={false}
                title={t("common.event.createOption.optionLink")}
              />
              <Link>
                <AtHref blank={true} title={option.url} link={option.url} />
              </Link>
            </Section>
          )}

          {/* 投票数 */}
          <VoteElement>
            <AtNoMarkLabel
              required={false}
              title={t("common.event.votes.title")}
            />
            <Text>{option.vote}</Text>
          </VoteElement>
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
        </Option>
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
  ${tab`
  `}
  ${sp`
    margin-bottom: 14px;
  `}
`;
const Text = styled.p`
  font-size: ${BASE_CSS.form.pc.overView};
  overflow-wrap: break-word;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.overView};
  `}
`;
const VoteElement = styled.div`
  margin-bottom: 24px;
`;
const Option = styled.div`
  margin-bottom: 10px;
`;
const Link = styled.div`
  overflow-wrap: break-word;
  color: ${BASE_CSS.link.color};
`;
