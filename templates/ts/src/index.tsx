import React, { render } from "simplejs/dom";
import { App } from "~/src/App.tsx";

function Root() {
  return <App />;
}

render(Root, document.getElementById("mount") as HTMLElement);
