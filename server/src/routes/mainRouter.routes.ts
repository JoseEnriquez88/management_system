import { Router } from "express";
import orderRouter from "./order.routes.js";

const mainRouter = Router();

mainRouter.use("/orders", orderRouter);

export default mainRouter;