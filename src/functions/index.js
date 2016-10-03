// @flow
import type classes from 'classnames'
import type { KeyCallbackType } from '../types/flow'

export { default as makeClassnames, makeClassesObject } from './classnames'
export { default as makeFlagIconOptions } from './options'
export { default as makeStyles } from './styles'
export * as countries from './countries'
export * as constants from './constants'


export const objectKeysApplyFn = (obj: classes, // eslint-disable-line import/prefer-default-export, max-len
                                  fn: KeyCallbackType) : classes =>
  Object.keys(obj).reduce((retObj: classes, key: string) : classes => { // eslint-disable-line arrow-body-style, max-len
    return {
      ...retObj,
      [fn(key)]: obj[key]
    }
  }, {})
