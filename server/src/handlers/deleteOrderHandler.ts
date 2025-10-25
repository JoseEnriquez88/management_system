import { Request, Response } from "express";
import deleteOrder from "../controllers/deleteOrder.js";

export default async function deleteOrderHandler(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await deleteOrder(id);
    return res.status(200).json({ response: response });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return res.status(404).json({ error: message });
  }
}
