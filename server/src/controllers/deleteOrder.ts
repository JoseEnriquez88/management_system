import { Order } from "../db.js";

export default async function deleteOrder(id: string): Promise<string> {
  const order = await Order.findByPk(id);
  if (!order) throw new Error(`Order with ID '${id}' does not exist.`);
  await order.destroy();
  return `Order '${id}' removed successfully.`;
}
