import { signal } from "./signal/index.ts";
import { effect } from "./effect/index.ts";

// deno-lint-ignore ban-types
type Effect = Function;

const context: Effect[] = [];

const useSignal = signal(context);
const useEffect = effect(context);

export { useSignal, useEffect };
