import { Request, Response } from "express";
import getOrderById from "../controllers/getOrderById.js";

export default async function getOrderByIdHandler(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await getOrderById(id);
    return res.status(200).json(response);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return res.status(404).json({ error: message });
  }
}
