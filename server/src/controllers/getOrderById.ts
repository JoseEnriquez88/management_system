import { Order } from "../db.js";
import type { OrderAttributes } from "../types/order.js";

export default async function getOrderById(
  id: string
): Promise<OrderAttributes> {
  const order = await Order.findByPk(id);
  if (!order) throw new Error(`Order with id '${id}' not found.`);
  return order.get({ plain: true }) as OrderAttributes;
}
