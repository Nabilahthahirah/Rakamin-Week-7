function squareArea(sisi) {
  return sisi * sisi;
}

function perimeterArea(sisi) {
  return 4 * sisi;
}

function squareRectangle(panjang, lebar) {
  return panjang * lebar;
}

function perimeterRectangle(panjang, lebar) {
  return 2 * (panjang + lebar);
}

module.exports = {
  squareArea,
  perimeterArea,
  squareRectangle,
  perimeterRectangle,
};
