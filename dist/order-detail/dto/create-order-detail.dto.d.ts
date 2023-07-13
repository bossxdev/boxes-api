export declare class CreateOrderStyleDto {
    size_type: any;
    material: any;
    print_finish: any;
    print_side: any;
    per_unit: number;
    quantity: number;
    sub_total: number;
    custom_width: number;
    custom_lenght: number;
    custom_height: number;
}
export declare class CreateOrderStyleOtherDto {
    order_detail: any;
    volume: any;
    color: any;
}
export declare class CreateOrderDetailDto {
    order: any;
    product: any;
    size: string;
    paper_type: any;
    print_pattern: any;
    coating_pattern: any;
    special_technic: any;
    quantity_of_product: number;
    price_per_item: number;
    email: string;
}
export declare class CreateOrderDetailOtherDto extends CreateOrderStyleOtherDto {
    user: any;
    category_type: any;
    style_type: any;
}
