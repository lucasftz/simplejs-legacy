import { _h } from "simplejs/dom";
import { Counter } from "~/Counter.tsx";

// @jsx _h

function App() {
  return (
    <div>
      <h1 class="some-class">Hello world</h1>
      <Counter />
    </div>
  );
}

export { App };
