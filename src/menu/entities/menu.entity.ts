import { BaseEntity } from "./../../base-entity";
import { Column, Entity } from "typeorm";

@Entity("menu")
export class Menu extends BaseEntity {
  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  page: number;

  @Column()
  sort: number;
}
