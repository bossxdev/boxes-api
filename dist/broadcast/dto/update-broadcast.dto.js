"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBroadcastDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_broadcast_dto_1 = require("./create-broadcast.dto");
class UpdateBroadcastDto extends swagger_1.PartialType(create_broadcast_dto_1.CreateBroadcastDto) {
}
exports.UpdateBroadcastDto = UpdateBroadcastDto;
//# sourceMappingURL=update-broadcast.dto.js.map