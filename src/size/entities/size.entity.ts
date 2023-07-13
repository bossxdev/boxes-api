import { BaseEntity } from "./../../base-entity";
import { Column, Entity } from "typeorm";

@Entity("size")
export class Size extends BaseEntity {
  @Column({ nullable: false })
  width: number;

  @Column({ nullable: false })
  height: number;

  @Column({ nullable: false })
  length: number;
}
