const initialSymbol = 'initial';
export const initial = Object.freeze({ type: initialSymbol } as const);
export type Initial = typeof initial;
export function makeInitial(): Initial {
	return initial;
}
