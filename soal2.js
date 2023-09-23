const fs = require("fs");

// Fungsi membaca file
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Fungsi membuat file dan menulis data payload
function createFile(filePath, payload) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, payload, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File berhasil dibuat.");
      }
    });
  });
}

// Fungsi untuk memeriksa keberadaan direktori
function checkFileAccess(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        reject(`File ${filePath} tidak ada. Membuat file ${filePath}.`);
      } else {
        resolve();
      }
    });
  });
}

async function writeFile() {
  try {
    const fileContent = await readFile("file.txt");
    await checkFileAccess("log.txt");
    await createFile("log.txt", fileContent);
    console.log("File berhasil dibuat dan ditulis.");
  } catch (error) {
    console.error(error);
  }
}

writeFile();
