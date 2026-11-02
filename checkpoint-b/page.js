import { items } from "./items.js";

/**
 * Draws the given items into #list.
 *
 * @param {Array<object>} list
 * @returns {void}
 */
export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.innerHTML = "";

  list.forEach((item) => {
    const row = document.createElement("li");

    row.classList.add("row");
    row.textContent = item.name;

    listElement.append(row);
  });
}

/**
 * Returns only items that are out of stock.
 *
 * @returns {Array<object>}
 */
export function matching() {
  return items.filter((item) => item.inStock === false);
}

/**
 * Sets up the page.
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);

  const shortlistButton = document.querySelector("#shortlist");

  shortlistButton.addEventListener("click", () => {
    renderItems(matching());
  });
}