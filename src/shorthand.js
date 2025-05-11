Element.prototype.__append = Element.prototype.append;
Element.prototype.append = function (...items) {
  if (items === undefined) return this;
  // items = items.flat();
  items = items.filter((el) => el !== undefined);

  this.__append(...items);

  return this;
};

Element.prototype.__prepend = Element.prototype.prepend;
Element.prototype.prepend = function (...items) {
  if (items === undefined) return this;

  this.__prepend(...items);

  return this;
};

Element.prototype.addClass = function (...classlist) {
  if (classlist === undefined) {
    return this;
  }

  classlist = classlist.flat(Infinity).filter((el) => el !== undefined);
  this.classList.add(...classlist);

  // if (classlist.constructor === Array) {
  //   this.classList.add(...classlist);
  // } else {
  //   const list = classlist.split(" ");
  //   this.classList.add(...list);
  // }

  return this;
};

Element.prototype.setText = function (text) {
  if (text === undefined || text === "") return this;

  this.textContent = text;
  return this;
};

Element.prototype.setID = function (id) {
  if (id === undefined || id === "") return this;

  this.id = id;
  return this;
};

Element.prototype.setAttr = function (name, value) {
  if (name === undefined || value === undefined) return this;

  this.setAttribute(name, value);
  return this;
};

Element.prototype.siHTML = function (html) {
  if (html === undefined) {
    return this;
  }

  this.innerHTML = html;
  return this;
};

Element.prototype.addHandler = function (type, fn) {
  this.addEventListener(type, fn);

  return this;
};

Element.prototype.addCallback = function (fn) {
  this.callback = fn;
  return this;
};

NodeList.prototype.contains = function (selector) {
  for (const i of this) {
    if (i.classList.contains(selector)) {
      return true;
    }
  }

  return false;
};

/**
 *
 * @param {string[]} classlist - Valid CSS class names
 * @returns
 */
export const div = (classlist) =>
  document.createElement("div").addClass(classlist);
export const section = (classlist) =>
  document.createElement("section").addClass(classlist);
/**
 *
 * @param {string} text - paragraph text
 * @param {string[]} classlist - valid css classes
 * @returns
 */
export const p = (text, classlist) =>
  document.createElement("p").setText(text).addClass(classlist);
export const a = (text, href) =>
  document.createElement("a").setText(text).setAttr("href", href);
export const span = (text, classlist) =>
  document.createElement("span").setText(text).addClass(classlist);
export const h4 = (text, classlist) =>
  document.createElement("h4").setText(text).addClass(classlist);
export const h3 = (text, classlist) =>
  document.createElement("h3").setText(text).addClass(classlist);
export const h2 = (text, classlist) =>
  document.createElement("h2").setText(text).addClass(classlist);
export const btn = (classlist) =>
  document
    .createElement("button")
    .setAttr("type", "button")
    .addClass(classlist);
export const icon = (svgString, classlist) => div(classlist).siHTML(svgString);
export const modal = (classlist) =>
  document.createElement("dialog").addClass(classlist);
export const form = (id, classlist) =>
  document.createElement("form").setID(id).addClass(classlist);
export const input = (id, classlist) =>
  document.createElement("input").setID(id).addClass(classlist);
export const label = (text, classlist) =>
  document.createElement("label").setText(text).addClass(classlist);
/**
 *
 * @param {string[]} items
 * @returns
 */
// export const ul = (classlist, ...items) => {
//   items = items.flat();
//   const elem = document.createElement("ul");
//   const children = Array.from(items, (item) => parseLi(item));
//
//   elem.append(...children);
//   elem.addClass(classlist);
//
//   return elem;
// };

/**
 *
 * @param {string | HTMLElement} item
 * @returns
 */
// export const parseLi = function (item) {
//   let element = document.createElement("li");
//   if (typeof item === "string") {
//     element.textContent = item;
//   } else {
//     if (item.render === undefined) {
//       element.appendChild(item);
//     } else {
//       element.appendChild(item.render());
//     }
//   }
//
//   return element;
// };
