"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateThai = exports.getDateNow = exports.dateFormatDB = void 0;
const dateFormatDB = (type = "day", data = 0) => {
    const date = new Date(data);
    if (type == "minute") {
        date.setDate(date.getUTCMinutes() + data);
    }
    else if (type == "hour") {
        date.setDate(date.getUTCHours() + data);
    }
    else if (type == "day") {
        date.setDate(date.getUTCDate() + data);
    }
    else if (type == "month") {
        date.setDate(date.getUTCMonth() + data);
    }
    const dateString = date.getUTCFullYear() +
        "-" +
        ("0" + (date.getUTCMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getUTCDate()).slice(-2) +
        " " +
        ("0" + date.getUTCHours()).slice(-2) +
        ":" +
        ("0" + date.getUTCMinutes()).slice(-2) +
        ":" +
        ("0" + date.getUTCSeconds()).slice(-2);
    return dateString;
};
exports.dateFormatDB = dateFormatDB;
const getDateNow = () => {
    const dateNow = new Date();
    const dateReturn = [];
    dateReturn["day"] = dateNow.getDate();
    dateReturn["month"] = ("0" + (dateNow.getMonth() + 1)).slice(-2);
    dateReturn["year"] = dateNow.getFullYear();
    return dateReturn;
};
exports.getDateNow = getDateNow;
const getDateThai = (dateInput = new Date()) => {
    const date = new Date(dateInput);
    date.setTime(date.getTime() + 7 * 60 * 60 * 1000);
    date.toLocaleString("en-EN", { timeZone: "Asia/Bangkok" });
    return date;
};
exports.getDateThai = getDateThai;
//# sourceMappingURL=date.utils.js.map