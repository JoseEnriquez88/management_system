import { Router } from "express";
import deleteOrderHandler from "../handlers/deleteOrderHandler.js";
import getAllOrdersHandler from "../handlers/getAllOrdersHandler.js";
import getOrderByIdHandler from "../handlers/getOrderByIdHandler.js";
import postOrderHandler from "../handlers/postOrderHandler.js";
import updateOrderByIdHandler from "../handlers/updateOrderByIdHandler.js";

const orderRouter = Router();

orderRouter.get("/", getAllOrdersHandler);
orderRouter.get("/:id", getOrderByIdHandler);
orderRouter.post("/", postOrderHandler);
orderRouter.put("/:id", updateOrderByIdHandler);
orderRouter.delete("/:id", deleteOrderHandler);

export default orderRouter;
