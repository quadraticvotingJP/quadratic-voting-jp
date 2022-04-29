/** @description Ecosystem Vote Form */
import React, { useState } from "react";
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
import { ParsedUrlQuery } from "querystring";

interface Props {
  item: EventVoteType;
  documentId: string;
}

const EcVoteForm: React.VFC<Props> = ({ item, documentId }) => {
  const { t } = useTranslation("common");
  const { voteEvent } = answer();
  const { setLoading } = useLoadingContext(); // loading
  const [voteOptions, setVoteOptions] = useState(item.options); // 選択肢
  const [credits, setCredits] = useState(item.votes); // 手持ち投票ポイント

  const onSubmit: (data: VoteOption[]) => void = async (data: VoteOption[]) => {
    setLoading(true);
    const redata: Answer = {
      votes: data.map((option: VoteOption) => {
        const votes: AnswerOption = {
          id: String(option.id),
          vote: option.vote,
        };
        return votes;
      }),
    };
    await voteEvent(redata, "event", documentId, "answer");
    setLoading(false);
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
  const setNewVoteOptions = (
    oldOptions: VoteOption[],
    option: VoteOption,
    code: "+" | "-"
  ) => {
    const newVoteOptions = oldOptions.map((oldOption) => {
      if (oldOption.id === option.id) {
        return {
          ...oldOption,
          vote: code === "+" ? oldOption.vote + 1 : oldOption.vote - 1,
        };
      }
      return oldOption;
    });
    updateCredits(newVoteOptions);
    return newVoteOptions;
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

    setCredits(item.votes - sumVotes);
  };

  return (
    <>
      <AtH2 title={t("pageTitle.vote")} />
      <br />
      <OrCardText
        title={t("common.event.eventTitle.title")}
        required={false}
        contents={item.title}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={item.overview}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.eventDeadline.title")}
        required={false}
        contents={`${item.publicationStartDate} ~ ${item.publicationEndDate}`}
        showEdit={false}
        disabled={false}
      />
      <br />
      <br />
      <AtH2 title={t("common.event.options.title")} />
      <OrProposalBlocks cost={credits} />
      {voteOptions.map((option: VoteOption, index: number) => {
        return (
          <>
            <OrVoteOptionCardForm
              title={t("common.event.options.title")}
              option={option}
              votes={item.votes}
              incrementVote={() => incrementVote(option)}
              decrementVote={() => decrementVote(option)}
            />
          </>
        );
      })}
      <br />
      <div className="text-center mt-8">
        <AtButton
          title={t("common.button.vote")}
          disabled={false}
          size={t("common.buttonSize.large")}
          onClick={() => onSubmit(voteOptions)}
        />
      </div>
    </>
  );
};

export default EcVoteForm;
