const mongoose = require("mongoose");
const db = require("../models/item");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/druid-carric"
);

const itemSeed = [
    {
        title:"Wooden Club",
        description:"Club"
    },
    {
        title:"Oak Quarterstaff",
        description:"Quarterstaff"
    }
];

db.Item
  .remove({})
  console.log("Items removed")
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });