import { OrderDetail } from "./entities/order-detail.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import {
  CreateOrderDetailDto,
  CreateOrderDetailOtherDto,
} from "./dto/create-order-detail.dto";
import {
  UpdateOrderDetailDto,
  UpdateOrderDetailOtherDto,
} from "./dto/update-order-detail.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PendingPaymentMail } from "src/utils/order-status/send-mail";

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailRepo: Repository<OrderDetail>
  ) {}
  async create(createOrderDetailDto: CreateOrderDetailDto): Promise<any> {
    const newData: any = await this.orderDetailRepo.create(
      createOrderDetailDto
    );
    const mainData: any = {
      user: newData.user,
      category_type: newData.category_type,
      style_type: newData.style_type,
    };
    const result: any = await this.orderDetailRepo.save(mainData);
    // set mail
    await PendingPaymentMail(createOrderDetailDto.email);
    // end set mail

    // const styleData: any = {
    //   order_detail: result,
    //   style_type: newData.style_type,
    //   size_type: newData.size_type,
    //   material: newData.material,
    //   print_finish: newData.print_finish,
    //   print_side: newData.print_side,
    //   per_unit: newData.per_unit,
    //   quantity: newData.quantity,
    //   sub_total: newData.sub_total,
    //   custom_width: newData.custom_width,
    //   custom_lenght: newData.custom_lenght,
    //   custom_height: newData.custom_height,
    // };
    // await this.orderStyle.save(styleData);
    if (!result) throw new NotFoundException("cannot save data.");
    else return { data: result };
  }

  // async createOther(
  //   createOrderDetailOtherDto: CreateOrderDetailOtherDto,
  // ): Promise<any> {
  //   const newData: any = await this.orderDetailRepo.create(
  //     createOrderDetailOtherDto,
  //   );

  //   const mainData: any = {
  //     user: newData.user,
  //     category_type: newData.category_type,
  //     style_type: newData.style_type,
  //   };
  //   const result: any = await this.orderDetailRepo.save(mainData);

  //   const styleData: any = {
  //     order_detail: result,
  //     volume: newData.style_type,
  //     color: newData.size_type,
  //   };
  //   const resultDetail: any = await this.orderStyleOther.save(styleData);

  //   if (!result) throw new NotFoundException('cannot save data.');
  //   else return { data: result };
  // }

  async findAll(): Promise<any> {
    const returnData: any = await this.orderDetailRepo.find({
      order: {
        id: "DESC",
      },
    });
    if (!returnData) throw new NotFoundException("cannot find data.");
    else return { data: returnData };
  }

  async findOne(id: number): Promise<any> {
    const returnData: any = await this.orderDetailRepo.findOne(id);
    if (!returnData) throw new NotFoundException("cannot find data.");
    else return { data: returnData };
  }

  async processingMsg() {}

  async update(
    id: number,
    updateOrderDetailDto: UpdateOrderDetailDto
  ): Promise<any> {
    const newData: any = await this.orderDetailRepo.create(
      updateOrderDetailDto
    );
    const mainData: any = {
      user: newData.user,
      category_type: newData.category_type,
    };
    const result: any = await this.orderDetailRepo.update(id, mainData);
    // const resultData: any = await this.orderDetailRepo.findOne(id, mainData);
    // const styleData: any = {
    //   style_type: newData.style_type,
    //   size_type: newData.size_type,
    //   material: newData.material,
    //   print_finish: newData.print_finish,
    //   print_side: newData.print_side,
    //   per_unit: newData.per_unit,
    //   quantity: newData.quantity,
    //   sub_total: newData.sub_total,
    //   custom_width: newData.custom_width,
    //   custom_lenght: newData.custom_lenght,
    //   custom_height: newData.custom_height,
    // };
    // const resultDetail: any = await this.orderStyle.update(
    //   resultData.order_style,
    //   styleData,
    // );

    if (!result) throw new NotFoundException("cannot save data.");
    else return { data: result };
  }

  // async updateOther(
  //   id: number,
  //   updateOrderDetailOtherDto: UpdateOrderDetailOtherDto,
  // ): Promise<any> {
  //   const newData: any = await this.orderDetailRepo.create(
  //     updateOrderDetailOtherDto,
  //   );

  //   const mainData: any = {
  //     user: newData.user,
  //     category_type: newData.category_type,
  //     style_type: newData.style_type,
  //   };

  //   const result: any = await this.orderDetailRepo.save(mainData);
  //   const resultData: any = await this.orderDetailRepo.findOne(id, mainData);

  //   const styleData: any = {
  //     order_detail: result,
  //     volume: newData.style_type,
  //     color: newData.size_type,
  //   };
  //   await this.orderStyleOther.update(resultData.order_style_other, styleData);

  //   if (!result) throw new NotFoundException('cannot save data.');
  //   else return { data: result };
  // }

  async remove(id: number): Promise<any> {
    const result: any = await this.orderDetailRepo.delete(id);
    if (result) return { data: {} };
  }
}
