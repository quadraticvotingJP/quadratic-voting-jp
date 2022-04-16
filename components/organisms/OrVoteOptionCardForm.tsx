import { Card } from "@mui/material";
import React, { useState } from "react";

// components
import { MoButtons } from "@/components/molecules/EntryPoint";
import { AtInputLabel } from "@/components/atoms/EntryPoint";
import { useTranslation } from "next-i18next";

interface Props {
  title: string;
  votes: number;
  options: VoteOption[];
}

const OrVoteOptionCardForm: React.FC<Props> = React.memo(
  ({ title, votes, options }) => {
    const { t } = useTranslation("common");

    const [voteOptions, setVoteOptions] = useState(options); // 選択肢
    const [credits, setCredits] = useState(votes); // 手持ち投票ポイント

    /**
     * 選択肢毎の投票を実施する
     * @param option 選択肢
     * @param code プラスかマイナスか
     * @retuen void
     */
    const incrementDecrementVote = (option: VoteOption, code: "+" | "-") => {
      setVoteOptions((oldOptions) => {
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
      });
    };

    /**
     * 持ち投票の計算を実施する
     * @param oldOptions 前情報
     * @return void
     */
    const updateCredits = (oldOptions: VoteOption[]) => {
      console.log(oldOptions);
      const sumVotes = oldOptions
        .map((option, _) => option.vote * option.vote)
        .reduce((a, b) => a + b, 0);

      setCredits(votes - sumVotes);
    };

    return (
      <>
        {credits}
        <Card className="p-6">
          <div className="mb-3">
            <div className="mb-1">
              <AtInputLabel required={false} focused={false} title={title} />
              {voteOptions.map((option: VoteOption, index: number) => {
                return (
                  <>
                    <Card key={index} className="p-6 my-6">
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
                          onClick: () => {
                            incrementDecrementVote(option, "-");
                          },
                        }}
                        right={{
                          title: "+",
                          disabled: false,
                          onClick: () => {
                            incrementDecrementVote(option, "+");
                          },
                        }}
                      />
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </Card>
      </>
    );
  }
);

export default OrVoteOptionCardForm;
