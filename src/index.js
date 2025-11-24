// src/index.js
import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/aboutMe", (req, res) => {
  // req.body contains the parsed JSON from the request
  const newaboutMe = req.body;
  console.log(req.body);

  // Add to your storage array

  // Return the created item with 201 status

  if (!req.body?.title) {
    return res.status(400).json({ error: "Title is required" });
  } else {
    res.status(201).json(newaboutMe);
    aboutMeStorage.push(newaboutMe);
    console.log(aboutMeStorage);
  }
});

app.get("/aboutMe", (req, res) => {
  res.json({
    AboutMe: aboutMeStorage,
  });
});

app.get("/aboutMe/:id", (req, res) => {
  res.json(aboutMeStorage);
});

const aboutMeStorage = [
  { id: 1, title: "Hobbies", type: ["singing", "playing piano"] },
  { id: 2, title: "Sports", type: ["basketball", "volleyball"] },
  { id: 3, title: "food", type: ["chicken", "mac and cheese"] },
  { id: 4, title: "color", type: ["red", "black", "white"] },
];

console.log("Seeded items", aboutMeStorage);
export default aboutMeStorage;

app.get("/", (req, res) => {
  res.send("<h1>Today is a Great Day!</h1>");
});

app.get("/game-night", (req, res) => {
  res.json({
    Movies: ["Stranger Things", "The Walking Dead", "Bad Boys"],
    Food: ["Rotel", "Party Wings", "Sliders"],
    Games: ["Uno", "Charades", "Scrabble"],
    Drinks: ["RootBeer", "Mango Tea", "Kool-aid"],
  });
});

app.get("/happy-birthday", (req, res) => {
  res.json({
    name: "Alice",
    age: 25,
    greeting: "Happy Birthday!",
  });
});

app.get("/bacon", (req, res) => {
  res.json({
    Type: "Turkey",
    Quantity: "6 oz",
    Brand: "Butterball",
    Nutrition: {
      Energy: "167 kcal",
      Fat: "13.89 g",
      Salt: "1.458 g",
    },
  });
});

app.get("/fish-facts", (req, res) => {
  res.json({
    Name: "US wild-caught Acadian Redfish",
    Availability: "Year-round",
    Source: "From Maine to New York",
    Taste: ["Mild", "Sweet"],
    Color: "White",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
