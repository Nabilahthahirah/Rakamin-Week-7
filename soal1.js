const formula = require("./formula.js");

async function main() {
  const sisiPersegi = 5;
  const panjangPersegiPanjang = 6;
  const lebarPersegiPanjang = 4;

  try {
    const luasPersegi = await formula.squareArea(sisiPersegi);
    const kelilingPersegi = await formula.perimeterArea(sisiPersegi);
    const luasPersegiPanjang = await formula.squareRectangle(panjangPersegiPanjang, lebarPersegiPanjang);
    const kelilingPersegiPanjang = await formula.perimeterRectangle(panjangPersegiPanjang, lebarPersegiPanjang);

    console.log("Luas Persegi:", luasPersegi);
    console.log("Keliling Persegi:", kelilingPersegi);
    console.log("Luas Persegi Panjang:", luasPersegiPanjang);
    console.log("Keliling Persegi Panjang:", kelilingPersegiPanjang);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

main();
