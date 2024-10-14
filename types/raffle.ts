import { Participant } from "./participant";
import { EntryCondition, checkConditions } from "./entryCondition";
import { maybeMatch, Maybe, Nothing, Just } from "./maybe";
import { Ok, Err, Result } from "./result";

export type Raffle = {
  id: string;
  name: string;
  entryConditions: EntryCondition[];
  participants: Participant[];
  endDate: Date;
  winner: Maybe<Participant>;
};

/**
 *
 * @param id - The id of the raffle
 * @param name - The name of the raffle
 * @param entryConditions - The conditions that participants must meet to enter the raffle
 * @param endDate - The date when the raffle will end
 * @returns A new raffle object
 */
export const createRaffle = (
  id: string,
  name: string,
  entryConditions: EntryCondition[],
  endDate: Date,
) => ({
  id,
  name,
  entryConditions,
  participants: [],
  endDate,
  winner: Nothing(),
});

/**
 * Adds a participant to a raffle.
 * @param raffle The raffle to which the participant will be added
 * @param participant The participant to be added to the raffle
 * @returns A new raffle object with the participant added
 */
export const addParticipant = (raffle: Raffle, participant: Participant) => ({
  ...raffle,
  participants: [...raffle.participants, participant],
});

/**
 * Filters out participants who do not meet the specified entry conditions.
 * @param participants - The list of participants to be filtered.
 * @param conditions - An array of entry conditions that the participants must meet.
 * @returns - An array of participants who meet all the conditions.
 */
export const getValidParticipants = (
  participants: Participant[],
  conditions: EntryCondition[],
) =>
  participants.filter(participant => checkConditions(participant, conditions));

/**
 * Draws a winner from the list of participants who meet the entry conditions.
 * @param raffle - The raffle for which a winner is to be drawn.
 * @returns - A Maybe type containing the winner if one is drawn, or Nothing if no winner is found.
 */
export const drawWinner = (raffle: Raffle): Maybe<Participant> => {
  const validParticipants = getValidParticipants(
    raffle.participants,
    raffle.entryConditions,
  );
  switch (validParticipants.length) {
    case 0:
      return Nothing();
    default: {
      const winnerIndex = Math.floor(Math.random() * validParticipants.length);
      const winner = validParticipants[winnerIndex];

      return Just(winner);
    }
  }
};

/**
 * gets the winner of a raffle
 *
 * @param raffle - The raffle for which the winner is to be displayed
 *
 * @returns - A Result type containing the winner if one is drawn, or an error message if no winner is found.
 */
export const getWinner = (raffle: Raffle): Result<Participant> =>
  maybeMatch<Participant, Result<Participant>>(
    raffle.winner,
    winner => Ok(winner),
    () => Err("No winner has been drawn yet"),
  );
