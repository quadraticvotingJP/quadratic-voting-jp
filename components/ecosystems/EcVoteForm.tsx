/**
 * @description Ecosystem Vote Form
 * @todo 送信時のデータ加工処理
 * @todo クレジットコンポーネント
 * @todo インクリメント・デクリメントのボタン制御
 * */
import React, { useMemo, useState } from "react";
import { routerPush } from "@/architecture/application/routing";
// i18n
import { useTranslation } from "next-i18next";
// component
import { AtH2, AtButton, AtInputLabel } from "@/components/atoms/EntryPoint";
import {
  OrCardText,
  OrVoteOptionCardForm,
} from "@/components/organisms/EntryPoint";
import { OrProposalBlocks } from "@/components/organisms/EntryPoint";

// context
import { useLoadingContext } from "@/context/LoadingContext";

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
  const { setLoading } = useLoadingContext(); // loading
  const [voteOptions, setVoteOptions] = useState(
    conversionVoteData.voteOptions
  ); // 選択肢
  const [credits, setCredits] = useState(conversionVoteData.votes); // 手持ち投票ポイント
  const userId = query.user;

  // 回答イベント
  const onSubmit: (data: VoteOption[]) => void = async (data: VoteOption[]) => {
    await setLoading(true);
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
    await setLoading(false);
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
    return credits >= 0 ? "bg-blue-900" : "bg-red-900";
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
    <div className="mx-10 mt-16">
      <AtH2
        title={t("pageTitle.vote")}
        className={"text-center mb-16 text-4xl font-bold"}
      />

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
        <AtInputLabel
          required={false}
          title={t("common.event.options.title")}
        />
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
      <div className="text-center mt-8">
        <AtButton
          title={t("common.button.vote")}
          disabled={isActive}
          onClick={() => onSubmit(voteOptions)}
        />
      </div>
      <OrProposalBlocks
        color={creditsColor}
        cost={credits}
        denominator={conversionVoteData.votes}
      />
    </div>
  );
};

export default EcVoteForm;
