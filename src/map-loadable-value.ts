import { mapLoadable } from './map-loadable';
import { makeError, makeInitial, makeLoaded, makeLoading, Loadable } from './loadable';

export function mapLoadableValue<T, TResult>(
	target: Loadable<T>,
	convert: (input: T) => TResult
): Loadable<TResult> {
	return mapLoadable<T, Loadable<TResult>>(target, {
		initial: makeInitial,
		loading: (value) => makeLoading(value === undefined ? undefined : convert(value)),
		loaded: (value) => makeLoaded(convert(value)),
		error: makeError,
	});
}
