export type OrderStatus = "pending" | "completed" | "cancelled";

export interface OrderAttributes {
  id: string;
  customer_name: string;
  item: string;
  quantity: number;
  status: OrderStatus;
  created_at: Date;
}

export interface OrderCreationAttributes
  extends Omit<OrderAttributes, "id" | "created_at" | "status"> {
  status?: OrderStatus;
}

export interface PaginationParams {
  page: number; 
  page_size: number; 
}

export interface Paginated<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    page_size: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
  };
}
