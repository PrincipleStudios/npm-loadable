export const errorType = 'error';
export type LoadableError = { type: typeof errorType; error?: Error };
export function makeError(error?: Error): LoadableError {
	return { type: errorType, error };
}
