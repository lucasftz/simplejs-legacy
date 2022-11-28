import { signal } from "https://raw.githubusercontent.com/lucasftz/simplejs/main/src/hooks/signal/index.ts";
import { effect } from "https://raw.githubusercontent.com/lucasftz/simplejs/main/src/hooks/effect/index.ts";

// deno-lint-ignore ban-types
type Effect = Function;

const context: Effect[] = [];

const useSignal = signal(context);
const useEffect = effect(context);

export { useSignal, useEffect };
