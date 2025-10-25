import { Order } from "../db.js";
import type { OrderAttributes, Paginated, PaginationParams } from "../types/order.js";

export default async function getAllOrders(
  pagination: PaginationParams
): Promise<Paginated<OrderAttributes>> {
  const { page, page_size } = pagination;

  const { rows, count } = await Order.findAndCountAll({
    limit: page_size,
    offset: (page - 1) * page_size,
    order: [["created_at", "DESC"]],
  });

  if (!rows || rows.length === 0) {
    throw new Error("No orders found.");
  }

  const total_pages = Math.max(1, Math.ceil(count / page_size));

  return {
    data: rows.map((r) => r.get({ plain: true })) as OrderAttributes[],
    meta: {
      total: count,
      page,
      page_size,
      total_pages,
      has_next_page: page < total_pages,
      has_prev_page: page > 1,
    },
  };
}
