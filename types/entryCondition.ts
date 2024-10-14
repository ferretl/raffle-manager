import { Participant } from "./participant";

export type EntryCondition = {
  condition: string;
  check: (Participant: Participant) => boolean;
};

export const Follow: EntryCondition = {
  condition: "follow",
  check: () => {
    //TODO: use X api to check if Participant is following the account
    return true; // check if Participant is following the account
  },
};

export const Like: EntryCondition = {
  condition: "like",
  check: () => {
    //TODO: use X api to check if Participant is liking the post
    return true; // check if Participant is liking the post
  },
};

export const Comment: EntryCondition = {
  condition: "comment",
  check: () => {
    // TODO: use X api to check if Participant is commenting on the post
    return true; // check if Participant is commenting on the post
  },
};

/**
 * Checks if a Participant meets all the specified entry conditions.
 *
 * @param Participant - The Participant to be checked against the conditions.
 * @param conditions - An array of entry conditions that the Participant must meet.
 * @returns A boolean indicating whether the Participant meets all the conditions.
 */
export const checkConditions = (
  Participant: Participant,
  conditions: EntryCondition[],
) => conditions.every(condition => condition.check(Participant));
