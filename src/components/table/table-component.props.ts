import type { Table } from "@tanstack/react-table";

export interface TableProps<T extends BaseProps> {
  table: Table<T>
  onClickFn: (id: number) => void
}

export interface BaseProps {
  id: number;
}