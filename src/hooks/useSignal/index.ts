function useSignal<T>(value: T): [() => T, (next: T) => void] {
  const read = () => {
    return value;
  };

  const write = (next: T) => {
    value = next;
  };

  return [read, write];
}

export { useSignal };
