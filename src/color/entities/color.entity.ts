import { Column, Entity } from "typeorm";
import { BaseEntity } from "./../../base-entity";

@Entity("color")
export class Color extends BaseEntity {
  @Column()
  name: string;
}
