/**
 * Enum representing the type of a Maybe value.
 *
 * `MaybeType` can be one of the following:
 * - `Just`: Indicates that the Maybe value contains a valid value.
 * - `Nothing`: Indicates that the Maybe value is empty or contains no value.
 */
enum MaybeType {
  Just = "maybe-type__just",
  Nothing = "maybe-type__nothing",
}

/**
 * Represents a value of type `T` wrapped in a `Just` type.
 *
 * @template T - The type of the value.
 * @property {typeof MaybeType.Just} type - The type indicator for `Just`.
 * @property {T} value - The actual value wrapped in the `Just` type.
 */
interface Just<T> {
  type: typeof MaybeType.Just;
  value: T;
}

/**
 * Represents a "Nothing" type in the Maybe monad.
 * This type is used to indicate the absence of a value.
 *
 * @property {typeof MaybeType.Nothing} type - The type discriminator for Nothing.
 */
interface Nothing {
  type: typeof MaybeType.Nothing;
}

/**
 * Represents a value that may or may not be present.
 *
 * @template T - The type of the value that may be present.
 *
 * @typedef {Just<T> | Nothing} Maybe
 */
export type Maybe<T> = Just<T> | Nothing;

/**
 * Represents a "Nothing" value in the Maybe type system.
 *
 * This function creates an object that signifies the absence of a value.
 * It is typically used in functional programming to handle optional values
 * without resorting to null or undefined.
 *
 * @returns {Nothing} An object with a type property set to MaybeType.Nothing.
 */
export const Nothing = (): Nothing => ({ type: MaybeType.Nothing });

/**
 * Creates a `Just` instance of the `Maybe` type with the provided value.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to wrap in the `Just` instance.
 * @returns {Just<T>} A `Just` instance containing the provided value.
 */
export const Just = <T>(value: T): Just<T> => ({
  type: MaybeType.Just,
  value,
});


/**
 * Applies a function to the value inside a `Maybe` if it exists.
 *
 * @template T - The type of the value inside the `Maybe`.
 * @template U - The type of the value returned by the function.
 * @param {Maybe<T>} maybe - The `Maybe` instance to map over.
 * @param {(value: T) => U} f - The function to apply to the value inside the `Maybe`.
 * @returns {Maybe<U>} A new `Maybe` instance containing the result of applying the function,
 *                     or `Nothing` if the original `Maybe` was `Nothing`.
 */
export const maybeMap = <T, U>(maybe: Maybe<T>, f: (value: T) => U): Maybe<U> => {
  switch (maybe.type) {
    case MaybeType.Just:
      return Just(f(maybe.value));
    case MaybeType.Nothing:
      return Nothing();
  }
}