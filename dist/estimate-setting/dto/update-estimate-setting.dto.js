"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstimateSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_estimate_setting_dto_1 = require("./create-estimate-setting.dto");
class UpdateEstimateSettingDto extends swagger_1.PartialType(create_estimate_setting_dto_1.CreateEstimateSettingDto) {
}
exports.UpdateEstimateSettingDto = UpdateEstimateSettingDto;
//# sourceMappingURL=update-estimate-setting.dto.js.map