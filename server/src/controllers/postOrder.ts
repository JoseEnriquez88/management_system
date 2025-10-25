import { Order } from "../db.js";
import type { OrderStatus } from "../types/order.js";

export default async function postOrder(
  customer_name: string,
  item: string,
  quantity: number,
  status: OrderStatus = "pending"
): Promise<string> {
  if (!customer_name || !item) {
    throw new Error("customer_name e item son requeridos.");
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("quantity debe ser un entero > 0.");
  }

  const newOrder = await Order.create({
    customer_name,
    item,
    quantity,
    status,
  });

  if (!newOrder)
    throw new Error(
      `Order for customer '${customer_name}' could not be created.`
    );

  return `Order for customer: '${newOrder.get(
    "customer_name"
  )}' was created successfully.`;
}
