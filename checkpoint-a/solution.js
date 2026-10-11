import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * Loads every order from the database.
 *
 * @returns {Promise<Array<object>>}
 */
export async function loadOrders() {
  return await findAllOrders();
}

/**
 * Keeps only orders from Alexandria that are paid.
 *
 * @param {Array<object>} orders
 * @returns {Array<object>}
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "paid"
  );
}

/**
 * Adds up the quantity of every order.
 *
 * @param {Array<object>} orders
 * @returns {number}
 */
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

/**
 * Looks up one order and describes it.
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Could not find order ${id}`;
  }
}

/**
 * Converts orders to JSON containing only item and price.
 *
 * @param {Array<object>} orders
 * @returns {string}
 */
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    item: order.item,
    price: order.price,
  }));

  return JSON.stringify(simplifiedOrders);
}