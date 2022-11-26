const mongoose = require("mongoose");

const newStatsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dishName: {
    type: String,
  
    trim: true,
  },
  guestAmount: Number,
  purchasedMainIngredient: Number,
  mainIngredient: {
    type: String,
  
    trim: true,
  },
  usedMainIngredient: Number,
  remainInStockMain: Number,
  unitMain: {
    type: String,
  
    unit: ["Styck", "FPK", "Kilo", "Pase"],
  },
  stewSoup: Number,
  stewSoupUnit: String,
  stewSoupLeft: Number,
  sideIngredient: {
    type: String,
    trim: true,
  },
  purchasedSide: Number,
  usedSideIngredient: Number,
  remainInStockSide: Number,
  unitSide: {
    type: String,
    unit: ["Styck", "FPK", "Kilo", "Pase"],
  },
  comment: String,
});
const newStats = new mongoose.model("newStatsModel", newStatsSchema);

module.exports = newStats;
