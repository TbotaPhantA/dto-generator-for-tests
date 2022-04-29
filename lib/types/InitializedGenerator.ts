import {WithFieldNames} from './withFieldNames';

export type InitializedGenerator<Generator extends Record<string, any>, Target extends Record<string, any>> = Generator & {
  [key in WithFieldNames<keyof Target>]: (it: Target[]) => Generator
}
