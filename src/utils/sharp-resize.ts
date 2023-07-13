const sharp = require("sharp");

const maxByte = 150000; //150kb
const width = 1280; //px
const height = 720; //px

export const SharpResize = (inputBuffer, size) => {
  if (Number(size) > maxByte) {
    return sharp(inputBuffer).resize(width, height).jpeg({ quality: 50 });
  } else {
    return inputBuffer;
  }
};
