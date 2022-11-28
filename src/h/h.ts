// deno-lint-ignore ban-types
type Props = { [name: string]: string | Function };
// deno-lint-ignore ban-types
const isEvent = (name: string, _value: string | Function): _value is Function =>
  name.startsWith("on");

function h(
  tagname: keyof HTMLElementTagNameMap,
  props: Props | null,
  ...children: (Node | string)[] | undefined[]
): HTMLElement {
  const element = document.createElement(tagname);

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
