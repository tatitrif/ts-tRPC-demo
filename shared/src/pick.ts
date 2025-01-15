import lodashPick from 'lodash/pick'

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
export const pick = <TObject extends Object, TKeys extends keyof TObject>(
  obj: TObject,
  keys: TKeys[]
): Pick<TObject, TKeys> => {
  return lodashPick(obj, keys)
}
