import { Roles } from "./../../roles/entities/role.entity";
import { BaseEntity } from "./../../base-entity";
import { Province } from "./province.entity";
export declare class Users extends BaseEntity {
    name: string;
    lastname: string;
    company: string;
    email: string;
    password: string;
    address: string;
    thumbon: string;
    ampher: string;
    province: Province;
    zipcode: number;
    bill_company: string;
    bill_address: string;
    bill_thumbon: string;
    bill_ampher: string;
    bill_province: Province;
    bill_zipcode: number;
    telephone: string;
    fax: string;
    lineid: string;
    role: Roles;
    token_remember: string;
    token_remember_datetime: Date;
    token: string;
    tax_no: number;
    tax_type: string;
    bill_address_status: boolean;
}
export declare class Userlogs extends BaseEntity {
    user: Users;
    description: string;
}
