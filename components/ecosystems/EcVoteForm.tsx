/**
 * @description Ecosystem Vote Form
 */
import React, { useMemo, useState } from "react";
import { routerPush } from "@/architecture/application/routing";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// i18n
import { useTranslation } from "next-i18next";
// component
import { AtButton, AtLabel } from "@/components/atoms/EntryPoint";
import {
  OrCardText,
  OrVoteOptionCardForm,
  OrProposalBlocks,
} from "@/components/organisms/EntryPoint";
import { Card } from "@/components/shared/EntryPoint";

// architecture
import { answer } from "@/architecture/application/answer";

interface Props {
  conversionVoteData: VoteData;
  documentId: string;
  query: {
    user: string;
  };
}

const EcVoteForm: React.FC<Props> = ({
  conversionVoteData,
  documentId,
  query,
}) => {
  const { t } = useTranslation("common");
  const { voteEvent } = answer();
  const [voteOptions, setVoteOptions] = useState(
    conversionVoteData.voteOptions
  ); // 選択肢
  const [credits, setCredits] = useState(conversionVoteData.votes); // 手持ち投票ポイント
  const userId = query.user;

  // 回答イベント
  const onSubmit: (data: VoteOption[]) => void = async (data: VoteOption[]) => {
    // 回答ようにデータを加工
    const redata: Answer = {
      votes: data.map((option: VoteOption) => {
        const votes: AnswerOption = {
          id: String(option.id),
          vote: option.vote,
        };
        return votes;
      }),
    };
    // answerAPI
    await voteEvent(redata, "event", documentId, "answer", userId);
    routerPush(`/dashboard/${documentId}`);
  };

  /**
   * 選択肢毎の投票を実施する
   * @param option 選択肢
   * @retuen void
   */
  const incrementVote = (option: VoteOption) => {
    setVoteOptions((oldOptions) => {
      return setNewVoteOptions(oldOptions, option, "+");
    });
  };
  const decrementVote = (option: VoteOption) => {
    setVoteOptions((oldOptions) => {
      return setNewVoteOptions(oldOptions, option, "-");
    });
  };

  // ボタンの活性・非活性制御
  const isActive: boolean = useMemo(() => {
    return credits < 0;
  }, [credits]);
  // 投票数のカラーを投票数に応じて変化させる
  const creditsColor: boolean = useMemo(() => {
    return credits >= 0 ? true : false;
  }, [credits]);
  // オブジェクトの値刷新
  const setNewVoteOptions = (
    oldOptions: VoteOption[],
    option: VoteOption,
    code: "+" | "-"
  ) => {
    const newVoteOptions = oldOptions.map((oldOption) => {
      if (oldOption.id === option.id) {
        const newVote = code === "+" ? oldOption.vote + 1 : oldOption.vote - 1;
        return {
          ...oldOption,
          vote: newVote,
        };
      }
      return oldOption;
    });
    const newCredits = updateCredits(newVoteOptions);
    return setNewButtonStatus(newVoteOptions, newCredits);
  };

  /**
   * 持ち投票の計算を実施する
   * @param oldOptions 前情報
   * @return void
   */
  const updateCredits = (oldOptions: VoteOption[]) => {
    const sumVotes = oldOptions
      .map((option, _) => option.vote * option.vote)
      .reduce((a, b) => a + b, 0);

    const newCredits = conversionVoteData.votes - sumVotes;
    setCredits(newCredits);
    return newCredits;
  };

  /**
   * @description 増減ボタンの活性非活性制御
   * @param newVoteOptions 更新された投票オプション
   * @param newCredits 更新されたクレジット情報
   * @returns
   */
  const setNewButtonStatus = (
    newVoteOptions: VoteOption[],
    newCredits: number
  ) => {
    return newVoteOptions.map((oldOption, _) => {
      const incrementButtonDisable = newCredits > 0 || oldOption.vote < 0;
      const decrementButtonDisable = newCredits > 0 || oldOption.vote > 0;
      return {
        ...oldOption,
        left: !decrementButtonDisable,
        right: !incrementButtonDisable,
      };
    });
  };

  return (
    <>
      <FlexElement>
        <FlexAuto>
          <H2>{t("pageTitle.creat")}</H2>
          <br />
          <OrCardText
            title={t("common.event.eventTitle.title")}
            required={false}
            contents={conversionVoteData.title}
            showEdit={false}
            disabled={false}
          />
          <br />
          <OrCardText
            title={t("common.event.overview.title")}
            required={false}
            contents={conversionVoteData.overview}
            showEdit={false}
            disabled={false}
          />
          <br />
          <OrCardText
            title={t("common.event.eventDeadline.title")}
            required={false}
            contents={`${conversionVoteData.publicationStartDate} ~ ${conversionVoteData.publicationEndDate}`}
            showEdit={false}
            disabled={false}
          />
          <br />
          <Card>
            <AtLabel required={false} title={t("common.event.options.title")} />
            {voteOptions.map((option: VoteOption, index: number) => {
              return (
                <div key={`${index}-${option.id}`}>
                  <OrVoteOptionCardForm
                    option={option}
                    votes={conversionVoteData.votes}
                    incrementButtonDisable={option.left}
                    decrementButtonDisable={option.right}
                    incrementVote={() => incrementVote(option)}
                    decrementVote={() => decrementVote(option)}
                  />
                </div>
              );
            })}
          </Card>
          <br />
          <ButtonArea>
            <AtButton
              title={t("common.button.vote")}
              disabled={isActive}
              onClick={() => onSubmit(voteOptions)}
              accent={true}
            />
          </ButtonArea>
        </FlexAuto>
        <ProposalBlocksArea>
          <OrProposalBlocks
            cost={credits}
            normal={creditsColor}
            denominator={conversionVoteData.votes}
          />
        </ProposalBlocksArea>
      </FlexElement>
    </>
  );
};

export default EcVoteForm;

const FlexElement = styled.h2`
  display: flex;
  margin-top: 4rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  ${tab`
  `}
  ${sp`
    margin-left: 1rem;
    margin-right: 1rem;
  `}
`;
const H2 = styled.h2`
  font-size: ${BASE_CSS.page.pc.title};
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.page.sp.title};
  `}
`;
const FlexAuto = styled.div`
  width: 100%;
`;
const ProposalBlocksArea = styled.div`
  width: 100px;
  ${tab`
  `}
  ${sp`
    width: 0px;
  `}
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;
