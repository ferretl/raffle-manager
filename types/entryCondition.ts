import { User } from "./user";

export type EntryCondition = {
  condition: string;
  check: (user: User) => boolean;
};

export const Follow: EntryCondition = {
  condition: "follow",
  check: () => {
    //TODO: use X api to check if user is following the account
    return true; // check if user is following the account
  },
};

export const Like: EntryCondition = {
  condition: "like",
  check: () => {
    //TODO: use X api to check if user is liking the post
    return true; // check if user is liking the post
  },
};

export const Comment: EntryCondition = {
  condition: "comment",
  check: () => {
    // TODO: use X api to check if user is commenting on the post
    return true; // check if user is commenting on the post
  },
};


/**
 * Checks if a user meets all the specified entry conditions.
 *
 * @param user - The user to be checked against the conditions.
 * @param conditions - An array of entry conditions that the user must meet.
 * @returns A boolean indicating whether the user meets all the conditions.
 */
export const checkConditions = (user: User, conditions: EntryCondition[]) =>
  conditions.every((condition) => condition.check(user));
