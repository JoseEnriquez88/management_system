import { DataTypes, Sequelize } from "sequelize";

export default function OrderModel(sequelize: Sequelize) {
  return sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        allowNull: false,
        defaultValue: "pending",
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );
}
