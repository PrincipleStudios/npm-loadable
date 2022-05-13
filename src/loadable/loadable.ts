import type { LoadableError } from './error';
import type { Initial } from './initial';
import type { Loaded } from './loaded';
import type { Loading } from './loading';

export type Loadable<T> = Loading<T> | LoadableError | Loaded<T> | Initial;
