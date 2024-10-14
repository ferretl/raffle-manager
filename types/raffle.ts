import { Participant } from "./participant";
import { EntryCondition, checkConditions } from "./entryCondition";
import { Maybe, Just, Nothing } from "./maybe";

export type Raffle = {
  id: string;
  name: string;
  entryConditions: EntryCondition[];
  participants: Participant[];
  endDate: Date;
  winner: Maybe<Participant>;
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
 * Draws a winner from the list of participants who meet the entry conditions.
 * @param raffle - The raffle for which a winner is to be drawn.
 * @param participants - The list of participants who entered the raffle.
 * @returns - A Maybe type containing the winner if one is drawn, or Nothing if no winner is found.
 */
export const drawWinner = (
  raffle: Raffle,
  participants: Participant[]
): Maybe<Participant> => {
  const validParticipants = getValidParticipants(
    participants,
    raffle.entryConditions
  );
  switch (validParticipants.length) {
    case 0:
      return Nothing();
    default:
      const winnerIndex = Math.floor(Math.random() * validParticipants.length);
      const winner = validParticipants[winnerIndex];
      return Just(winner);
  }
};
