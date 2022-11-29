import { React, render, JSX } from "simplejs/dom";
import { App } from "~/App.tsx";

function Root() {
  return <App />;
}

render(Root, document.getElementById("mount") as HTMLElement);
