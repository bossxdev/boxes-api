import { BaseEntity } from "src/base-entity";
import { Column, Double, Entity } from "typeorm";

@Entity("EstimateSetting")
export class EstimateSetting extends BaseEntity {
  @Column({ nullable: false, default: "" })
  name: string;

  @Column({ nullable: false, default: "" })
  size: string;

  @Column({ nullable: false, default: "" })
  unit: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price100: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price500: number;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price1000: number;
}
