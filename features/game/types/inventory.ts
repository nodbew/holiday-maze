export interface Item {
  name: string;
  show: boolean;
  stackable: boolean;
}
export type Inventory = Array<Item>;
