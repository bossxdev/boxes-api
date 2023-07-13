"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfMonth = void 0;
const DayOfMonth = (month = "01") => {
    const newMonth = +month - 1;
    const arrData = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return arrData[newMonth];
};
exports.DayOfMonth = DayOfMonth;
//# sourceMappingURL=day-data.utils.js.map