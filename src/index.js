// src/index.js
import express from "express";
import { randomUUID } from "node:crypto";
import supabase from "./supabase.js";

const app = express();
const port = 3000;

app.use(express.json());

// storage array

const aboutMeStorage = [
  { id: randomUUID(), title: "Hobbies", type: ["singing", "playing piano"] },
  { id: randomUUID(), title: "Sports", type: ["basketball", "volleyball"] },
  { id: randomUUID(), title: "food", type: ["chicken", "mac and cheese"] },
  { id: randomUUID(), title: "color", type: ["red", "black", "white"] },
];

app.get("/aboutMe", async (req, res) => {
  const result = await supabase.from("about-me").select("*");
  const data = result.data;
  const error = result.error;

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({
    AboutMe: data,
  });
});

app.get("/aboutMe/:id", async (req, res) => {
  const id = req.params.id;

  const { data } = await supabase
    .from("about-me")
    .select("*")
    .eq("id", id)
    .single(); // Efficiently fetches just one

  res.json(data);
  // const aboutMe = aboutMeStorage.find(
  //   (entry) => entry.id.toString === req.params.id
  // );

  if (!aboutMe) return res.status(404).json({ error: "aboutMe not found" });
  res.status(200).json(aboutMe);
});

app.post("/aboutMe", async (req, res) => {
  // Validate BEFORE talking to the database
  if (!req.body.title || !req.body.type) {
    return res.status(400).json({ error: "Title and Type are required" });
  }
  const { data, error } = await supabase
    .from("about-me")
    .insert(req.body)
    .select(); // Returns the created record

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Supabase returns an array, we want the single object
  res.status(201).json(data[0]);
});

// app.post("/aboutMe", (req, res) => {
//   if (!req.body?.title) {
//     return res.status(400).json({ error: "Title is required" });
//   }

//   if (!req.body?.type) {
//     return res.status(400).json({ error: "Type is required" });
//   } else {
//     console.log(aboutMeStorage);

//     const newaboutMe = { ...req.body, id: randomUUID() };
//     aboutMeStorage.push(newaboutMe);
//     res.status(201).json(newaboutMe);
//     console.log(req.body);
//   }
// });
console.log("Seeded items", aboutMeStorage);

app.delete("/aboutMe/:id", (req, res) => {
  console.log("Deleting " + req.params.id);

  // check if it exists
  const aboutMe = aboutMeStorage.find((entry) => entry.id === req.params.id);

  // If not found, return 404
  if (!aboutMe) {
    return res.status(404).json({ error: "Item not found" });
  }

  // Deletes the item from your storage.
  aboutMeStorage = aboutMeStorage.filter((entry) => entry.id !== req.params.id);

  // Returns successful response
  res.status(200).json({ message: "Item deleted successfully" });
});

// app.get("/", (req, res) => {
//   res.send("<h1>Today is a Great Day!</h1>");
// });

// app.get("/game-night", (req, res) => {
//   res.json({
//     Movies: ["Stranger Things", "The Walking Dead", "Bad Boys"],
//     Food: ["Rotel", "Party Wings", "Sliders"],
//     Games: ["Uno", "Charades", "Scrabble"],
//     Drinks: ["RootBeer", "Mango Tea", "Kool-aid"],
//   });
// });

// app.get("/happy-birthday", (req, res) => {
//   res.json({
//     name: "Alice",
//     age: 25,
//     greeting: "Happy Birthday!",
//   });
// });

// app.get("/bacon", (req, res) => {
//   res.json({
//     Type: "Turkey",
//     Quantity: "6 oz",
//     Brand: "Butterball",
//     Nutrition: {
//       Energy: "167 kcal",
//       Fat: "13.89 g",
//       Salt: "1.458 g",
//     },
//   });
// });

// app.get("/fish-facts", (req, res) => {
//   res.json({
//     Name: "US wild-caught Acadian Redfish",
//     Availability: "Year-round",
//     Source: "From Maine to New York",
//     Taste: ["Mild", "Sweet"],
//     Color: "White",
//   });
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
