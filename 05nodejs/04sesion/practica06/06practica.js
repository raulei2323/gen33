const fs = require("fs")

const dbFile = "db.json"

function init() {

    const fileExists = fs.existsSync(dbFile);
  
    if (!fileExists) {
      fs.writeFileSync(dbFile, JSON.stringify({ kodersDB: [Nombre, Apellido] }));
    }
  }
//CRUD
//Create koders
//Read Koders
//Update Koders
//Delete Koders

function getKoders() {
    const content = fs.readFileSync(dbFile, "utf8");
    return JSON.parse(content).kodersDB;
  }

function updateKoders(kodersNames) {
    const newKoder = { kodersNames: nombre, apellido };
    const newKoderAsString = JSON.stringify(newKoder);
    fs.writeFileSync(dbFile, newKoderAsString);
  }

function createKoder(koder) {
    const koders = getKoders();
    kodernames.push(kodersDB);
    updateKoder(koder);
  }

function deleteKoder(indexKoder) {
    const koders = getKoders();
    todos.splice(koderIndex, 1);
    updateKoders(kodersDB);
  }

