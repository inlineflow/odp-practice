import { Component } from "./component";

export class Dropdown extends Component {
  /** @param {string} title  */
  /** @param {Component[]} items */
  constructor(title, items) {
    super();
    this.title = title;
    this.children = items;
    this.navItems = items;
  }
}
