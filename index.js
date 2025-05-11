import { Dropdown, DropdownItem } from "./src/dropdown";

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

    document.body.replaceChildren(...tree);
    // document.body.append(...tree);
  }
}

const app = new App();
const dropdown = new Dropdown(
  "Hot Sauces",
  [],
  [
    new DropdownItem({
      text: "Food at George's",
      callback: () => console.log("Hello world"),
      classlist: [],
      position: 1,
    }),
    new DropdownItem({
      text: "Taco Taco",
      callback: () => console.log("Goodbye me"),
      classlist: [],
      position: 2,
    }),
  ],
);
// dropdown.setRender(function () {
//   console.log(this.title);
// });
app.register(dropdown);
app.render();
// dropdown.title = "Laundry Options";
// app.render();
