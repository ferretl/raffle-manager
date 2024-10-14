import { Participant } from "./participant";
import { EntryCondition, checkConditions } from "./entryCondition";

export type Raffle = {
  id: string;
  name: string;
  entryConditions: EntryCondition[];
  participants: Participant[];
  winner?: Participant;
};

/**
 * Filters out participants who do not meet the specified entry conditions.
 * @param participants - The list of participants to be filtered.
 * @param conditions - An array of entry conditions that the participants must meet.
 * @returns - An array of participants who meet all the conditions.
 */
export const getValidParticipants = (
  participants: Participant[],
  conditions: EntryCondition[]
) =>
  participants.filter((participant) =>
    checkConditions(participant, conditions)
  );

/**
 * Selects a random winner from the list of participants who meet the entry conditions.
 * @param raffle - The Raffle to draw a winner for.
 * @param participants - The array of participants who entered the raffle.
 * @returns - The winner of the raffle.
 */
export const drawWinner = (raffle: Raffle, participants: Participant[]) => {
  const validParticipants = getValidParticipants(
    participants,
    raffle.entryConditions
  );
  // Check if there are any valid participants
  if (validParticipants.length === 0) {
    throw new Error("No participants meet the entry conditions.");
  }
  const winner =
    validParticipants[Math.floor(Math.random() * validParticipants.length)];
  return winner;
};
