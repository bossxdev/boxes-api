import { BaseEntity } from "src/base-entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("statuses")
export class Status extends BaseEntity {
  @Column({ default: "Authentication required" })
  type: string;
}
