import { BaseEntity } from "./../../base-entity";
import { Column, Entity } from "typeorm";

@Entity("page")
export class Pages extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image_cover: string;

  @Column()
  seo_link: string;

  @Column()
  seo_title: string;

  @Column()
  seo_description: string;

  @Column()
  seo_keyword: string;

  @Column({ default: true })
  status: boolean;
}
