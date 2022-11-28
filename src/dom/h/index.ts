// deno-lint-ignore ban-types
type Fn = Function;
type Props = { [name: string]: string | Fn };
const isEvent = (name: string, _value: string | Fn): _value is Fn =>
  name.startsWith("on");
type Component = Fn;
const isComponent = (
  tagname: keyof HTMLElementTagNameMap | Component
): tagname is Component => typeof tagname === "function";

function h(
  tagname: keyof HTMLElementTagNameMap | Component,
  props: Props | null,
  ...children: (Node | string)[] | undefined[]
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
      typeof child === "string" ? document.createTextNode(child) : child;
    element.append(childNode);
  }

  return element;
}

export { h };
