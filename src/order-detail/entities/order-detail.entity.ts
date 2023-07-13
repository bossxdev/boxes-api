import { BaseEntity } from "./../../base-entity";
import { Column, Entity } from "typeorm";
@Entity("order_detail")
export class OrderDetail extends BaseEntity {
  @Column()
  size: string;

  @Column()
  quantity_of_product: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price_per_item: number;

  @Column({ nullable: true })
  email: string;
}
