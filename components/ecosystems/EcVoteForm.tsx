/**
 * @description Ecosystem Vote Form
 */
import React, { useMemo, useState } from "react";
import { routerPush } from "@/architecture/application/routing";
import styled from "styled-components";
import { sp, tab } from "@/media";
import { BASE_CSS } from "@/utils/baseCss";
// i18n
import { useTranslation } from "next-i18next";
// component
import { AtButton, AtLabel, AtHref } from "@/components/atoms/EntryPoint";
import { MoLabelText, MoButtons } from "@/components/molecules/EntryPoint";
import {
  OrCard,
  OrVoteOptionCardForm,
  OrProposalBlocks,
  OrModal,
} from "@/components/organisms/EntryPoint";
import { Card, H1, JustifyCenter } from "@/components/shared/EntryPoint";

// architecture
import { answer } from "@/architecture/application/answer";

// GA
import { gaSetLogEvent } from "@/architecture/application/gaLogEvent";
import {
  CLICK_VOTE_BUTTON,
  CLICK_INCREMENT_VOTE,
  CLICK_DECREMENT_VOTE,
} from "@/architecture/domain/gaEventName";

interface Props {
  conversionVoteData: VoteData;
  documentId: string;
  query: {
    user: string;
  };
  uid: string;
}

const EcVoteForm: React.FC<Props> = ({
  conversionVoteData,
  documentId,
  query,
  uid,
}) => {
  const { t } = useTranslation("common");
  const { voteEvent } = answer();
  const [voteOptions, setVoteOptions] = useState(
    conversionVoteData.voteOptions
  ); // 選択肢
  const [credits, setCredits] = useState(conversionVoteData.votes); // 手持ち投票ポイント

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
    await voteEvent(redata, "event", documentId, "answer", uid);
    routerPush(`/dashboard/${documentId}`);
    gaSetLogEvent(CLICK_VOTE_BUTTON);
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
    gaSetLogEvent(CLICK_INCREMENT_VOTE);
  };
  const decrementVote = (option: VoteOption) => {
    setVoteOptions((oldOptions) => {
      return setNewVoteOptions(oldOptions, option, "-");
    });
    gaSetLogEvent(CLICK_DECREMENT_VOTE);
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
  // モーダルロジック
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <FlexElement>
        <FlexAuto>
          <H1>{t("pageTitle.vote")}</H1>
          <br />
          <Link>
            <AtHref
              blank={true}
              title={t("common.vote.message.rule")}
              link={t("header.link")}
            />
          </Link>
          <br />
          <OrCard>
            <MoLabelText
              title={t("common.event.eventTitle.title")}
              required={false}
              contents={conversionVoteData.title}
              showEdit={false}
              disabled={false}
            />
          </OrCard>
          <br />
          <OrCard>
            <MoLabelText
              title={t("common.event.overview.title")}
              required={false}
              contents={conversionVoteData.overview}
              showEdit={false}
              disabled={false}
            />
          </OrCard>
          <br />
          <OrCard>
            <MoLabelText
              title={t("common.event.eventDeadline.title")}
              required={false}
              contents={`${conversionVoteData.publicationStartDate} ~ ${conversionVoteData.publicationEndDate}`}
              showEdit={false}
              disabled={false}
            />
          </OrCard>
          <br />
          <Card>
            <AtLabel required={false} title={t("common.event.options.title")} />
            <br />
            <TitleArea>
              {conversionVoteData.optionTitleArray.map((title, index) => {
                return (
                  <>
                    <p key={`title-${index}`}>{title}</p>
                    <br />
                  </>
                );
              })}
            </TitleArea>
          </Card>
          <br />
          <Card>
            <AtLabel required={false} title={t("common.event.vote.title")} />
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
          <JustifyCenter>
            <AtButton
              title={t("common.button.vote")}
              disabled={isActive}
              onClick={
                credits === 0
                  ? () => onSubmit(voteOptions)
                  : () => setShowModal(true)
              }
              accent={true}
            />
          </JustifyCenter>
        </FlexAuto>
        <ProposalBlocksArea>
          <OrProposalBlocks
            cost={credits}
            normal={creditsColor}
            denominator={conversionVoteData.votes}
          />
        </ProposalBlocksArea>
        {/* 投票確認モダール */}
        <OrModal
          title="投票確認"
          open={showModal}
          close={() => setShowModal(false)}
        >
          <RemainingCredits>
            {credits}票余っています。投票しますか？
            <AlertArea>
              <AlertText>※投票は一度きりです。</AlertText>
              <AlertText>※投票後の編集はできません。</AlertText>
            </AlertArea>
          </RemainingCredits>
          <br />
          <br />
          <MoButtons
            left={{
              title: "いいえ",
              disabled: false,
              onClick: () => setShowModal(false),
            }}
            right={{
              title: "はい",
              disabled: false,
              onClick: () => onSubmit(voteOptions),
            }}
          />
        </OrModal>
      </FlexElement>
    </>
  );
};

export default EcVoteForm;

const FlexElement = styled.h2`
  display: flex;
  margin-top: 4rem;
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
const Link = styled.div`
  overflow-wrap: break-word;
  color: ${BASE_CSS.link.color};
  font-size: 20px;
`;
const RemainingCredits = styled.p`
  font-size: 20px;
  text-align: center;
`;

const TitleArea = styled.div`
  overflow: scroll;
  height: 200px;
`;

const AlertArea = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const AlertText = styled.p`
  width: 200px;
  text-align: left;
  font-size: 14px;
  color: ${BASE_CSS.color.red};
`;
