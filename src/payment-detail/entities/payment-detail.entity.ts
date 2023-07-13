import { BaseEntity } from "src/base-entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment-detail")
export class PaymentDetail extends BaseEntity {
  @Column()
  TransactionId: string;

  @Column()
  Amount: string;

  @Column()
  OrderNo: string;

  @Column()
  CustomerId: string;

  @Column()
  BankCode: string;

  @Column()
  PlaymentDate: string;

  @Column()
  PaymentStatus: number;

  @Column()
  BankRefCode: number;

  @Column()
  CurrentDate: number;

  @Column()
  CurrentTime: number;

  @Column()
  PaymentDescription: string;

  @Column({ nullable: true })
  CreditCardToken: string;

  @Column()
  Currency: number;

  @Column()
  CustomerName: string;

  @Column()
  CheckSum: string;

  @Column({ nullable: true })
  Email: string;
}
