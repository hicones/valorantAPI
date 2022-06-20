const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8877;
const agents = require("./database/agents.json");
const maps = require("./database/maps.json");
const guns = require("./database/guns.json");

app.get("/", (req, res) => {
  response.json({
    msg: "Ok",
  });
});

app.get("/agents", (req, res) => {
  res.json(agents);
});

app.get("/maps", (req, res) => {
  res.json(maps);
});

app.get("/guns", (req, res) => {
  res.json(guns);
});

app.listen(PORT, () => {
  console.log("Escutando na porta" + PORT);
});
