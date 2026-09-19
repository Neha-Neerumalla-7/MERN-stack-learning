const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// EJS configuration
app.set("view engine", "ejs");


// MongoDB connection
const dbURI =
  "mongodb+srv://nehaneerumalla7_db_user:7dyfYWdey9ec2gxw@cluster0.qenpuac.mongodb.net/CampusLostFoundDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Database error:", err));


// Schema
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  foundBy: {
    type: String,
    required: true
  },

  contact: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Available"
  }
});


// Model
const Item = mongoose.model("Item", itemSchema);


// HOME PAGE
app.get("/", async (req, res) => {
  try {
    const items = await Item.find();

    res.render("index", { items: items });

  } catch (error) {
    console.log("HOME PAGE ERROR:", error);
    res.status(500).send(error.message);
  }
});

// CREATE
app.post("/items", async (req, res) => {
  try {
    const newItem = new Item(req.body);

    await newItem.save();

    res.status(201).json({
      message: "Item added successfully"
    });

  } catch (error) {
    res.status(400).json({
      message: "Error adding item"
    });
  }
});


// READ
app.get("/items", async (req, res) => {
  const items = await Item.find();

  res.json(items);
});


// UPDATE
app.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedItem);

  } catch (error) {
    res.status(400).json({
      message: "Error updating item"
    });
  }
});


// DELETE
app.delete("/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting item"
    });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});