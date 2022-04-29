// api parameter

/**
 * @description
 */
export function vote(votes: AnswerOption[]): Answer {
  return {
    votes: votes,
  };
}
