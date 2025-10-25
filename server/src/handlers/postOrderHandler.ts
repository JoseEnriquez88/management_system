import { Request, Response } from "express";
import postOrder from "../controllers/postOrder.js";
import type { OrderStatus } from "../types/order.js";

export default async function postOrderHandler(req: Request, res: Response) {
  try {
    const { customer_name, item, quantity, status } = req.body as {
      customer_name: string;
      item: string;
      quantity: number;
      status?: OrderStatus;
    };
    const qty = typeof quantity === "string" ? Number(quantity) : quantity;
    const response = await postOrder(customer_name, item, qty, status);
    return res.status(201).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
