import { Roles } from "./../../roles/entities/role.entity";
import { BaseEntity } from "./../../base-entity";
import { ManyToOne, Column, Entity, JoinColumn } from "typeorm";
import { Province } from "./province.entity";

@Entity("users")
export class Users extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  thumbon: string;

  @Column({ nullable: true })
  ampher: string;

  @ManyToOne(() => Province, (province: Province) => province.id)
  @JoinColumn({
    name: "provinceid",
  })
  province: Province;

  @Column({ nullable: true })
  zipcode: number;

  @Column({ nullable: true })
  bill_company: string;

  @Column({ nullable: true })
  bill_address: string;

  @Column({ nullable: true })
  bill_thumbon: string;

  @Column({ nullable: true })
  bill_ampher: string;

  @ManyToOne(() => Province, (province: Province) => province.id)
  @JoinColumn({
    name: "bill_provinceid",
  })
  bill_province: Province;

  @Column({ nullable: true })
  bill_zipcode: number;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  fax: string;

  @Column({ nullable: true })
  lineid: string;

  @ManyToOne(() => Roles, (role: Roles) => role.id)
  @JoinColumn({
    name: "roleid",
  })
  role: Roles;

  @Column({ nullable: true })
  token_remember: string;

  @Column({ nullable: true, type: "timestamp" })
  token_remember_datetime: Date;

  @Column({ nullable: true })
  token: string;

  @Column({ nullable: true })
  tax_no: number;

  @Column({ nullable: true })
  tax_type: string;

  @Column({ nullable: true, default: false })
  bill_address_status: boolean;
}
@Entity("user_logs")
export class Userlogs extends BaseEntity {
  @ManyToOne(() => Users, (user: Users) => user.id)
  @JoinColumn({
    name: "userid",
  })
  user: Users;

  @Column({ nullable: true })
  description: string;
}
