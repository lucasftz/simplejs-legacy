function render(component: () => HTMLElement, mount: HTMLElement) {
  mount.appendChild(component());
}

export { render };
