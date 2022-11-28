// deno-lint-ignore ban-types
type Effect = Function;

function signal(context: Effect[]) {
  const getCurrentObserver = () => context[context.length - 1];

  return function <T>(value: T): [() => T, (next: T) => void] {
    const subscribers = new Set<Effect>();

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
  };
}

export { signal };
