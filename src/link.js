import { Component } from "./component";

export class NavItem extends Component {
  constructor(text, callback) {
    super();
    this.text = text;
    this.action = callback;
  }
}
