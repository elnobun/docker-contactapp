/* This file is the single source of truth for all functional declarations in
 * the `/src` and `/api` folders. */

// Module imports -> using ES6 "type": "module" in package.json
import express from "express";
import ConnectDatabase from "./src/database/connection.js";
import UserApi from "./api/crud.js";

// Create a new instance of express
const app = express();

// Recognize incoming request object as JSON objects
app.use(express.json());

// Specify the application PORT
const PORT = process.env.PORT || 3000;

// Create new instance of the User API
const api = new UserApi();

// Initialize database connection
const connection = async () => {
  const mongooseInstance = new ConnectDatabase();
  await mongooseInstance.connect();
};

// Application and database terminal development response
app.listen(PORT, () => {
  console.log(`Application listening on PORT: ${PORT}`);
  connection().then(() => console.log("Connected to Database"));
});

// Create the GET, POST, PATCH, DELETE routes to consume api endpoints.
// Note: route section can be modularized into a separate folder called controllers
// Todo: add comments
// Todo: modularize route
app.get("/api/users", async (req, res) => {
  const allUsers = await api.getAll();
  try {
    res.send(allUsers);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Todo: add comments
// Todo: modularize route
app.post("/api/user/create", async (req, res) => {
  const newUser = await api.createUser(req.body);
  try {
    res.send(newUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Todo: add comments
// Todo: modularize route
app.patch("/api/user/:id", async (req, res) => {
  try {
    const updateUser = await api.updateUser(req.params.id, req.body);
    res.send(updateUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Todo: add comments
// Todo: modularize route
app.delete("/api/user/:id", async (req, res) => {
  try {
    const userToDelete = await api.deleteUser(req.params.id);
    if (!userToDelete) res.status(400).send("No user found!");
    res.status(200).send("User has been deleted");
  } catch (e) {
    res.status(500).send(e);
  }
});
