import { Request, Response } from "express";
import getAllOrders from "../controllers/getAllOrders.js";
import { getPaginationParams } from "../utils/pagination.js";

export default async function getAllOrdersHandler(req: Request, res: Response) {
  try {
    const pagination = getPaginationParams(req);
    const result = await getAllOrders(pagination);
    return res.status(200).json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return res.status(404).json({ error: message });
  }
}
