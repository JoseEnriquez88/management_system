import { Request } from "express";
import { PaginationParams } from "../types/order.js";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const MAX_PAGE_SIZE = 100;

export function getPaginationParams(req: Request): PaginationParams {
  const page = Math.max(
    DEFAULT_PAGE,
    Number.isFinite(Number(req.query.page))
      ? Number(req.query.page)
      : DEFAULT_PAGE
  );

  let page_size = Math.max(
    1,
    Number.isFinite(Number(req.query.page_size))
      ? Number(req.query.page_size)
      : DEFAULT_PAGE_SIZE
  );

  page_size = Math.min(page_size, MAX_PAGE_SIZE);

  return { page, page_size };
}
