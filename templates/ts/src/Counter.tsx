import { _h } from "simplejs/dom";
import { useSignal } from "simplejs/hooks";

// @jsx _h

function Counter() {
  const [count, setCount] = useSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>
      {() => "Count: " + count()}
    </button>
  );
}

export { Counter };
