import { BaseEntity } from "src/base-entity";
import { Column, Entity } from "typeorm";

@Entity("provinces")
export class Province extends BaseEntity {
  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  name_th: string;

  @Column({ nullable: false })
  name_en: string;

  @Column({ nullable: false })
  geography_id: string;
}
