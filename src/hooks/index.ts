// deno-lint-ignore ban-types
type Fn = Function;

const context: Fn[] = [];
const getCurrentObserver = () => context[context.length - 1];

function useSignal<T>(value: T): [() => T, (next: T) => void] {
  const subscribers = new Set<Fn>();

  const read = () => {
    const current = getCurrentObserver();
    if (current) subscribers.add(current);
    return value;
  };

  const write = (next: T) => {
    value = next;
    subscribers.forEach((sub) => sub());
  };

  return [read, write];
}

function useEffect(fn: Fn) {
  const execute = () => {
    context.push(execute);

    try {
      fn();
    } finally {
      context.pop();
    }
  };

  execute();
}

export { useSignal, useEffect };
