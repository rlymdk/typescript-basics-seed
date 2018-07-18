function orderError(error: string): never {
  throw new Error(error)
  // never goung to return a value!
}

orderError('Something went wrong')