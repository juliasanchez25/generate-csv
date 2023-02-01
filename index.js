const Table = require("cli-table");
const url = "https://rickandmortyapi.com/api/character";

const getAllCharacters = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const arrayData = Object.values(data.results);

  arrayData.map((char) => {
    const table = new Table({
      head: ["Name", "Specie", "Status"],
      colWidths: [25, 25, 25],
    });

    table.push([char.name, char.species, char.status]);
    console.log(table.toString());
  });
};

getAllCharacters();
