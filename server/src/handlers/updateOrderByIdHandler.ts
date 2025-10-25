import { Request, Response } from "express";
import updateOrder from "../controllers/updateOrder.js";
import type { OrderStatus } from "../types/order.js";

export default async function updateOrderByIdHandler(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const { customer_name, item, quantity, status } = req.body as {
    customer_name?: string;
    item?: string;
    quantity?: number | string;
    status?: OrderStatus;
  };
  try {
    const qty = typeof quantity === "string" ? Number(quantity) : quantity;
    const response = await updateOrder(id, customer_name, item, qty, status);
    return res.status(200).json(response);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return res.status(400).json({ error: message });
  }
}
