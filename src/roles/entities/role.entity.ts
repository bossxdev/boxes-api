import { BaseEntity } from "./../../base-entity";
import { Entity, Column } from "typeorm";

@Entity("role")
export class Roles extends BaseEntity {
  @Column({ nullable: false })
  name: string;
}
