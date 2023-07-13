export declare class CreateUserDto {
    name?: string;
    lastname?: string;
    email: string;
    password: string;
    role: any;
}
export declare class CreateUserOrderDto {
    name?: string;
    lastname?: string;
    email: string;
    password: string;
    address: string;
    thumbon: string;
    ampher: string;
    province: any;
    zipcode: number;
    telephone: string;
    fax: string;
    lineid: any;
    company: string;
    bill_address: string;
    bill_address_status: boolean;
    bill_ampher: string;
    bill_company: string;
    bill_thumbon: string;
    bill_zipcode: number;
    bill_province: any;
    role: any;
}
export declare class CreateUserLogsDto {
    user: any;
    description: string;
}
export declare class ChangePassword {
    email: string;
    password: string;
    new_password: string;
    new_password_again: string;
}
export declare class RemeberPassword {
    email: string;
}
