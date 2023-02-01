const fs = require("fs");
const Table = require("cli-table");
const path = require("path");
const url = "https://rickandmortyapi.com/api/character";

// const createCsvWriter = require("csv-writer").createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//   path: "./rickandmorty.csv",
//   headerIdDelimiter: '.',
//   header: ["name", "status", "species"].map((item) => ({
//     id: item,
//     title: item.replace('.', '_'),
//   })),
// });

const getAllCharacters = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const arrayData = Object.values(data.results);

  const [headers] = arrayData.map((item) => Object.keys(item));

  const headersText = headers.join(",");
  const pathFile = path.join(__dirname, "rickandmorty.csv");
  fs.writeFileSync(pathFile, headersText);

  const rickandmortyPersons = arrayData.map((item) =>
    Object.values(item).join(",")
  );
  console.log("rickandmortyPersons", rickandmortyPersons);

  fs.writeFileSync(pathFile, rickandmortyPersons.join("\n"), { flag: "a" });
  // arrayData.map((char) => {
  //   const table = new Table({
  //     head: ["Name", "Specie", "Status"],
  //     colWidths: [25, 25, 25],
  //   });

  //   table.push([char.name, char.species, char.status]);
  //   console.log(table.toString());
  // });

  //   try {
  //     await csvWriter.writeRecords(data.results[0])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
};

getAllCharacters();
