"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharpResize = void 0;
const sharp = require("sharp");
const maxByte = 150000;
const width = 1280;
const height = 720;
const SharpResize = (inputBuffer, size) => {
    if (Number(size) > maxByte) {
        return sharp(inputBuffer).resize(width, height).jpeg({ quality: 50 });
    }
    else {
        return inputBuffer;
    }
};
exports.SharpResize = SharpResize;
//# sourceMappingURL=sharp-resize.js.map