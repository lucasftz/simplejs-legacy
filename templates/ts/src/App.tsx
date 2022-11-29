import { React, JSX } from "simplejs/dom";
import { Counter } from "~/Counter.tsx";

function App() {
  return (
    <div>
      <h1 class="some-class">Hello world</h1>
      <Counter />
    </div>
  );
}

export { App };
