import { Component } from "./component";
import { div, p } from "./shorthand";

export class Dropdown extends Component {
  /** @param {string} title  */
  /** @param {Component[]} items */
  constructor(title, classlist, items) {
    super();
    this.title = title;
    this.navItems = items.sort((a, b) => a.position - b.position);
    this.setRender(function () {
      const result = div("dropdown").append(p("Food court"));
      const children = this.navItems.map((item) => item.render());

      result.addEventListener("mouseenter", () => {
        children.map((c) => c.classList.replace("invisible", "visible"));
      });

      result.addEventListener("mouseleave", () => {
        children.map((c) => c.classList.replace("visible", "invisible"));
      });

      result.append(...children);
      return result;
    });
  }
}

export class DropdownItem extends Component {
  constructor({ text, callback, classlist, position }) {
    super();
    this.text = text;
    this.action = callback;
    this.position = position;
    this.setRender(function () {
      const classes = ["dropdown-item", "invisible", ...classlist];
      return div(classes).append(p(this.text));
    });
  }
}
