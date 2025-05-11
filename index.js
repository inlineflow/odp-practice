import { Dropdown } from "./src/dropdown";

// console.log('Hello world')
class App {
  #children = [];
  constructor() {}

  /** import { Component } from './component.js' */
  /** @param {Component} component  */
  register(component) {
    this.#children.push(component);
  }

  #renderTree() {
    const results = [];
    for (const c of this.#children) {
      results.push(c.render());
    }

    return results;
  }

  render() {
    const tree = this.#renderTree();
    document.body.append(tree);
  }
}

const app = new App();
const dropdown = new Dropdown("Hot Sauces");
dropdown.setRender(function () {
  console.log(this.title);
});
app.register(dropdown);
app.render();
dropdown.title = "Laundry Options";
app.render();
