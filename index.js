require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// const db = require("./database/dbconfig.js");
const Hubs = require("./models/hubs-model.js");

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  try {
    const hubs = await Hubs.find();
    res.status(200).json(hubs);
  } catch (error) {
    res
      .status(500)
      .json({ error, message: "Unable to get items, its not you.. its me" });
  }
});
// @desc     Get a single item by ID
// @route    GET /api/items/:id
// @access   Private
server.get("/:id", async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "That item cannot be found" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to find this item, its not you.. its me"
    });
  }
});
// @desc     Post an item
// @route    POST /api/items
// @access   Private
server.post("/", async (req, res) => {
  try {
    const hub = await Hubs.insert(req.body);
    if (hub) {
      res
        .status(201)
        .json({ hub, message: "You have successfully added an item!" });
    } else {
      res.status(400).json({ message: "please include all required content" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to add this item, its not you.. its me"
    });
  }
});
// @desc     Edit an Item
// @route    PUT /api/items:id
// @access   Private
server.put("/:id", async (req, res) => {
  try {
    const item = await Items.update(req.params.id, req.body);
    if (item) {
      res.status(200).json({ item, message: "Info updated!" });
    } else {
      res.status(404).json({ message: "Item could not be found!" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to edit this Item, its not you.. its me"
    });
  }
});
// @desc     Delete an Item
// @route    DELETE /api/items:id
// @access   Private
server.delete("/:id", async (req, res) => {
  try {
    const count = await Items.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "Deleted!" });
    } else {
      res.status(404).json({ message: "Item unable to be deleted!" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to delete this Item, its not you.. its me"
    });
  }
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log("All your server are belong to us!  :D");
});
