enum MaybeType {
  Just = "maybe-type__just",
  Nothing = "maybe-type__nothing",
}

interface Just<T> {
  type: typeof MaybeType.Just;
  value: T;
}

interface Nothing {
  type: typeof MaybeType.Nothing;
}

export type Maybe<T> = Just<T> | Nothing;

export const Nothing = (): Nothing => ({ type: MaybeType.Nothing });

export const Just = <T>(value: T): Just<T> => ({
  type: MaybeType.Just,
  value,
});

/**
 * Applies a function to the value inside a `Maybe` if it exists.
 *
 * @param maybe - The `Maybe` instance to map over.
 * @param f - The function to apply to the value inside the `Maybe`.
 * @returns  A new `Maybe` instance containing the result of applying the function,
 *                     or `Nothing` if the original `Maybe` was `Nothing`.
 */
export const maybeMap = <T, U>(
  maybe: Maybe<T>,
  f: (value: T) => U
): Maybe<U> => {
  switch (maybe.type) {
    case MaybeType.Just:
      return Just(f(maybe.value));
    case MaybeType.Nothing:
      return Nothing();
  }
};

/**
 * 
 * @param maybe - The maybe to match
 * @param onJust - The function to apply if the maybe is Just
 * @param onNothing - The function to apply if the maybe is Nothing
 * @returns - The result of applying the appropriate function
 */
export const maybeMatch = <T, U>(
  maybe: Maybe<T>,
  onJust: (value: T) => U,
  onNothing: () => U
): U => {
  switch (maybe.type) {
    case MaybeType.Just:
      return onJust(maybe.value);
    case MaybeType.Nothing:
      return onNothing();
  }
};
