import { useEffect } from "https://raw.githubusercontent.com/lucasftz/simplejs/main/src/hooks/index.ts";

// deno-lint-ignore ban-types
type Fn = Function;
type Props = { [name: string]: string | Fn };
const isEvent = (name: string, _value: string | Fn): _value is Fn =>
  name.startsWith("on");
type Component = Fn;
const isComponent = (
  tagname: keyof HTMLElementTagNameMap | Component
): tagname is Component => typeof tagname === "function";

const handleBraced = (element: HTMLElement, child: () => string) => {
  useEffect(() => {
    element.textContent = child();
  });

  return null;
};

function createElement(
  tagname: keyof HTMLElementTagNameMap | Component,
  props: Props | null,
  ...children: (Node | string | (() => string))[] | undefined[]
): HTMLElement {
  const element = isComponent(tagname)
    ? tagname()
    : document.createElement(tagname);

  if (props !== null) {
    for (const [name, value] of Object.entries(props)) {
      if (isEvent(name, value)) {
        element.addEventListener(
          name.substring(2).toLowerCase(),
          value as EventListenerOrEventListenerObject
        );
      } else {
        element.setAttribute(name, value);
      }
    }
  }

  for (const child of children) {
    if (!child) break;
    const childNode =
      typeof child === "string"
        ? document.createTextNode(child)
        : typeof child === "function"
        ? handleBraced(element, child)
        : child;

    childNode && element.append(childNode);
  }

  return element;
}

const h = { createElement };

export default h;
