import { BaseEntity } from "src/base-entity";
import { Entity, Column } from "typeorm";

@Entity("dhl-tracking")
export class DhlTracking extends BaseEntity {
  @Column()
  messageDateTime: string;

  @Column()
  shipmentID: string;

  @Column({ default: [] })
  deliveryConfirmationNo: string;

  @Column({ default: [] })
  content: string;

  @Column({ default: [] })
  shipmentPieceID: string;
}
