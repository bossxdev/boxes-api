import { BaseEntity } from "src/base-entity";
export declare class DhlTracking extends BaseEntity {
    messageDateTime: string;
    shipmentID: string;
    deliveryConfirmationNo: string;
    content: string;
    shipmentPieceID: string;
}
