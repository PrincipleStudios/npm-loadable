import { errorType, LoadableError } from './error';
import { initial, Initial } from './initial';
import { Loaded, loadedType } from './loaded';
import { Loading, loadingType } from './loading';
import { Loadable } from './loadable';

export function isLoaded<T>(thing: Loadable<T>): thing is Loaded<T> {
	return thing.type === loadedType;
}

export function isInitial(thing: Loadable<unknown>): thing is Initial {
	return thing === initial;
}

export function isLoading<T>(thing: Loadable<T>): thing is Loading<T> {
	return thing.type === loadingType;
}

export function isError(thing: Loadable<unknown>): thing is LoadableError {
	return thing.type === errorType;
}
