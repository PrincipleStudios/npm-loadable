import { neverEver } from 'src/internal/never-ever';
import { isError, isInitial, isLoaded, isLoading, Loadable } from './loadable';

export function mapLoadable<TInput, TResult>(
	thing: Loadable<TInput>,
	{
		initial: whenInitial,
		loading: whenLoading,
		loaded: whenLoaded,
		error: whenError,
	}: {
		initial?: () => TResult;
		loading: (value?: TInput) => TResult;
		loaded: (value: TInput) => TResult;
		error: (error?: Error) => TResult;
	}
): TResult {
	if (isLoading(thing)) return whenLoading(thing.value);
	if (isInitial(thing)) return (whenInitial || whenLoading)();
	if (isError(thing)) return whenError(thing.error);
	if (isLoaded(thing)) return whenLoaded(thing.value);
	return neverEver(thing);
}
