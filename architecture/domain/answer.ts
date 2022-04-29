// api parameter

/**
 * @description
 */
export function vote(votes: AnswerOption[], isVote: boolean): Answer {
  return {
    votes: votes,
    isVote: isVote,
  };
}
