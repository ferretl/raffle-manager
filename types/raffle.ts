import { User } from "./user";
import { EntryCondition, checkConditions } from "./entryCondition";

export type Raffle = {
  id: string;
  name: string;
  participants: User[];
  winner?: User;
};

/**
 * Filters out participants who do not meet the specified entry conditions.
 * @param participants - The list of participants to be filtered.
 * @param conditions - An array of entry conditions that the participants must meet.
 * @returns - An array of participants who meet all the conditions.
 */
export const getValidParticipants = (participants: User[], conditions: EntryCondition[]) =>
  participants.filter((participant) => checkConditions(participant, conditions));
