/** Base class for components */
export class Component {
  constructor() {
    this.componentName = this.constructor.name;
  }
  render = () =>
    alert(
      `${this.componentName}'s render function has not been set yet. Use setRender(renderFunc) before calling render()`,
    );
  setRender(renderFunc) {
    this.render = renderFunc.bind(this);
  }
}
