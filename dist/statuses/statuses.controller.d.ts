import { StatusesService } from "./statuses.service";
export declare class StatusesController {
    private readonly statusesService;
    constructor(statusesService: StatusesService);
    findAll(): Promise<any>;
}
