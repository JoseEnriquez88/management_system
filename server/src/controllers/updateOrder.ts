import { Order } from "../db.js";
import type { OrderStatus } from "../types/order.js";

export default async function updateOrder(
  id: string,
  customer_name?: string,
  item?: string,
  quantity?: number,
  status?: OrderStatus
): Promise<string> {
  const order = await Order.findByPk(id);
  if (!order) throw new Error(`Order with id '${id}' doesn't exist.`);

  if (quantity !== undefined) {
    if (typeof quantity === "string") quantity = Number(quantity as unknown);
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error("quantity must be an integer > 0.");
    }
  }
  if (status && !["pending", "completed", "cancelled"].includes(status))
    throw new Error(
      "status must be one of the following values: pending, completed, cancelled."
    );

  if (customer_name !== undefined) order.set("customer_name", customer_name);
  if (item !== undefined) order.set("item", item);
  if (quantity !== undefined) order.set("quantity", quantity);
  if (status !== undefined) order.set("status", status);

  await order.save();

  return `Order: '${order.get("id")}' was updated successfully.`;
}
