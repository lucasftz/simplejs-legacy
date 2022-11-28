function createMount() {
  const mount = document.createElement("div");
  document.appendChild(mount);
  return mount;
}

function render(component: () => HTMLElement, mount: HTMLElement | null) {
  const _mount = mount ?? createMount();

  _mount.appendChild(component());
}

export { render };
