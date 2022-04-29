// api parameter

/**
 * @description
 */
export function vote(votes: AnswerOption[]): Answer {
  return {
    votes: votes,
  };
}

export function answerStatus(
  collectionName: string,
  documentId: string,
  subCollectionName: string,
  userId: string
) {
  return {
    collectionName: collectionName,
    documentId: documentId,
    subCollectionName: subCollectionName,
    userId: userId,
  };
}
