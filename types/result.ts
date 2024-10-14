enum ResultType {
  Ok = "result-type__ok",
  Err = "result-type__err",
}

interface Ok<T> {
  type: typeof ResultType.Ok;
  value: T;
}

interface Err {
  type: typeof ResultType.Err;
  error: string;
}

export type Result<T> = Ok<T> | Err;

export const Ok = <T>(value: T): Ok<T> => ({
  type: ResultType.Ok,
  value,
});

export const Err = (error: string): Err => ({
  type: ResultType.Err,
  error,
});

/**
 * Applies a function to the value inside a `Result` if it exists.
 *
 * @param result - The `Result` instance to map over.
 * @param f  - The function to apply to the value inside the `Result`.
 * @returns A new `Result` instance containing the result of applying the function,
 */
export const resultMap = <T, U>(
  result: Result<T>,
  f: (value: T) => U
): Result<U> => {
  switch (result.type) {
    case ResultType.Ok:
      return Ok(f(result.value));
    case ResultType.Err:
      return Err(result.error);
  }
};

