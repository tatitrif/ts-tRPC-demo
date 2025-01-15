import lodashOmit from 'lodash/omit'

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
export const omit = <TObject extends Object, TKeys extends keyof TObject>(
  obj: TObject,
  keys: TKeys[]
): Omit<TObject, TKeys> => {
  return lodashOmit(obj, keys)
}
