// src/db.ts
import "dotenv/config";
import { Sequelize, Model, ModelStatic } from "sequelize";
import OrderModelFactory from "./models/Order.js";
import type {
  OrderAttributes,
  OrderCreationAttributes,
} from "./types/order.ts";

const { DB_HOST, NODE_ENV } = process.env;

export const sequelize = new Sequelize(DB_HOST as string, {
  dialect: "postgres",
  logging: NODE_ENV === "development" ? false : false,
  native: false,
});

export type OrderModel = ModelStatic<
  Model<OrderAttributes, OrderCreationAttributes>
>;
export const Order: OrderModel = OrderModelFactory(sequelize);
