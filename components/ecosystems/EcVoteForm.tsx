/**
 * @description Ecosystem Vote Form
 */
import React, { useMemo, useState } from "react";
import { routerPush } from "@/architecture/application/routing";
// i18n
import { useTranslation } from "next-i18next";
// component
import { AtH2, AtButton, AtLabel } from "@/components/atoms/EntryPoint";
import {
  OrCardText,
  OrVoteOptionCardForm,
} from "@/components/organisms/EntryPoint";
import { OrProposalBlocks } from "@/components/organisms/EntryPoint";

// architecture
import { answer } from "@/architecture/application/answer";
import { Card } from "@mui/material";

interface Props {
  conversionVoteData: VoteData;
  documentId: string;
  query: {
    user: string;
  };
}

const EcVoteForm: React.VFC<Props> = ({
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
  const creditsColor: string = useMemo(() => {
    return credits >= 0
      ? "bg-blue-900 py-6 px-6 text-white text-center rounded"
      : "bg-red-900 py-6 px-6 text-white text-center rounded";
  }, [credits]);

  const assginLeftStyle = (isState: boolean) => {
    return isState
      ? "w-full mr-5 text-base w-40 h-10 py-2 px-6 border-2 border-blue-200 text-blue-300"
      : "hover:border-blue-200 hover:text-blue-200 w-full mr-5 text-base w-40 h-10 py-2 px-6 border-2 border-blue-900 text-blue";
  };
  const assginRightStyle = (isState: boolean) => {
    return isState
      ? "bg-blue-200 text-white w-full text-base w-40 h-10 py-2 px-6"
      : "bg-blue-900 hover:bg-blue-300 text-white w-full text-base w-40 h-10 py-2 px-6";
  };
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
      <div className="flex">
        <div className="flex-auto p-2">
          <AtH2 title={t("pageTitle.vote")} />
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
          <Card className="p-6 my-6 rounded-xl">
            <AtLabel required={false} title={t("common.event.options.title")} />
            {voteOptions.map((option: VoteOption, index: number) => {
              return (
                <div key={`${index}-${option.id}`}>
                  <OrVoteOptionCardForm
                    leftStyle={assginLeftStyle(option.left)}
                    rightStyle={assginRightStyle(option.right)}
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
          <div className="text-center mt-8">
            <AtButton
              title={t("common.button.vote")}
              disabled={isActive}
              onClick={() => onSubmit(voteOptions)}
            />
          </div>
        </div>
        <div className="flex-auto">
          <OrProposalBlocks
            style={creditsColor}
            cost={credits}
            denominator={conversionVoteData.votes}
          />
        </div>
      </div>
    </>
  );
};

export default EcVoteForm;
