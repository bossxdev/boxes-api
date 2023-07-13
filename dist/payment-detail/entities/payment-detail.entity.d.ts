import { BaseEntity } from "src/base-entity";
export declare class PaymentDetail extends BaseEntity {
    TransactionId: string;
    Amount: string;
    OrderNo: string;
    CustomerId: string;
    BankCode: string;
    PlaymentDate: string;
    PaymentStatus: number;
    BankRefCode: number;
    CurrentDate: number;
    CurrentTime: number;
    PaymentDescription: string;
    CreditCardToken: string;
    Currency: number;
    CustomerName: string;
    CheckSum: string;
    Email: string;
}
