"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMenuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_menu_dto_1 = require("./create-menu.dto");
class UpdateMenuDto extends swagger_1.PartialType(create_menu_dto_1.CreateMenuDto) {
}
exports.UpdateMenuDto = UpdateMenuDto;
//# sourceMappingURL=update-menu.dto.js.map