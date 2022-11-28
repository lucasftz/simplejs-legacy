import { render } from "simplejs/dom";
import { App } from "~/src/App.ts";

function Root() {
  return App();
}

render(Root, document.getElementById("mount"));
