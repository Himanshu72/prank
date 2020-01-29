const express = require("express");
const app = express();

const gk = [
  ["VAIO is product of:", "sony"],
  ["Study of Inscriptions:", "Epigraphy"],
  ["Chicken embroidery:", "Lucknow"],
  ["Exim policy by:", "minister of commerce"],
  ["over allowed in 1975 criket world cup :", "60"],
  ["longest circle drawn on earth surface is :", "Equator"],
  ["Hillstaion kadikanal in :", "Tamil Nadu"],
  ["Miss universe in australia 2019 :", "Priya Serraro"],
  ["Head quaters IAEA:", "Vienna,Australia"],
  ["Country knows as percia:", "IRAN"],
  ["Oldest Veda:", "Rigveda"],
  ["Founding member of muslim  league:", "Nawab Salimullah Khan"],
  ["Length of longest Railway platfrom in india:", "4483ft"]
];

let gk2 = [
  ["Grapevine is term use in relation to :", "Communication"],
  ["SIAMESE Fight Fish  ia national Aquita animal in:", "Thailand"],
  ["Birla indust and tech musean in:", "W.Bengal"],
  ["First women IMO Award for Exception Bravery :", "Radhica menon"],
  ["Energy gained when bullet fire upwars is", "Potential Energy"],
  ["Booker price Award:", "Fiction"],
  ["Bank merge with capital first", "IDFC"],
  ["Five century in single cricket world cup :", "Rohit Sharma"],
  ["Book Paradoxical PM", "Shashi Tharul"],
  ["MDMK", "Marumalarchi Dravida Munnetra Kazhagam"],
  ["Bank nationalize during 2nd round of nationalization in 1950", 6]
];

app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
let x = 1;
app.use(express.static("audio"));
app.get("/", (req, res) => {
  res.render("ans", { data: gk, no: 0 });
});
app.get("/gk", (req, res) => {
  res.render("ans", { data: gk2, no: 13 });
});

app.get("/count", (req, res) => {
  res.send("Counter:" + x);
});

app.listen(port, () => console.log(`Example apps listening on port ${port}!`));
