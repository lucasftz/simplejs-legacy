import { render, h as _h } from "simplejs/dom";
import { App } from "~/src/App.tsx";

/* @jsx _h */

function Root() {
  return App();
}

render(Root, document.getElementById("mount") as HTMLElement);
