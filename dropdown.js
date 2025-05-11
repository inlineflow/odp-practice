import { Component } from "./src/componentt";

export class Dropdown extends Component {
  /** @param {string} title  */
  /** @param {Component[]} items */
  constructor(title, items) {
    super();
    this.componentName = this.constructor.name;
    this.title = title;
    this.children = items;
    this.navItems = items;
  }
}
