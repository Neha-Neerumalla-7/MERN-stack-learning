const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());


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


// CREATE
app.post("/items", async (req, res) => {
  try {
    const newItem = new Item(req.body);

    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({
      message: "Error adding item",
      error: error.message
    });
  }
});


// READ
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching items",
      error: error.message
    });
  }
});


// UPDATE
app.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.status(200).json(updatedItem);

  } catch (error) {
    res.status(400).json({
      message: "Error updating item",
      error: error.message
    });
  }
});


// DELETE
app.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Item not found"
      });
    }

    res.status(200).json({
      message: "Item deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting item",
      error: error.message
    });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});