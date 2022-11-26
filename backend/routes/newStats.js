/*jslint es6 */
const express = require("express");
const auth = require("../config/auth");
const router = express.Router();
const newStats = require("../models/newStats");
const app = express();
const cors = require("cors");
ObjectId = require("mongodb").ObjectId;
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.SERVER_URL); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//add new stats //

router.route("/newStats/:id").post(auth, (req, res) => {
  let userId = req.user.id;
  const {
    user,
    dishName,
    guestAmount,
    purchasedMainIngredient,
    usedMainIngredient,
    mainIngredient,
    remainInStockMain,
    unitMain,
    stewSoup,
    stewSoupUnit,
    stewSoupLeft,
    purchasedSide,
    sideIngredient,
    usedSideIngredient,
    remainInStockSide,
    unitSide,
    comment,
  } = req.body
  if (
    !dishName ||
    !guestAmount ||
    !purchasedMainIngredient ||
    !usedMainIngredient ||
    !mainIngredient ||
    !remainInStockMain
  )
    return res.send({
      message:
        "Fyll i alla fält, om det är helrätt, lämna tomt i tillbehörs fältet",
    });
  if (
    isNaN(guestAmount) ||
    isNaN(purchasedMainIngredient) ||
    isNaN(usedMainIngredient) ||
    isNaN(remainInStockMain) ||
    isNaN(stewSoup) ||
    isNaN(stewSoupLeft) ||
    isNaN(purchasedSide) ||
    isNaN(usedSideIngredient) ||
    isNaN(remainInStockSide)
  )
    return res.send({
      message: "Måste vara nummer",
    });

  newStats.findOne({ dishName: dishName }).then((dish) => {
    if (dish) return res.send({ message: "Maträtt redan registerad" });

    //New order created
    const newToRecord = new newStats({
      user: userId,
      dishName,
      guestAmount,
      purchasedMainIngredient,
      usedMainIngredient,
      mainIngredient,
      remainInStockMain,
      unitMain,
      stewSoup,
      stewSoupUnit,
      stewSoupLeft,
      purchasedSide,
      sideIngredient,
      usedSideIngredient,
      remainInStockSide,
      unitSide,
      comment,
    });
    newToRecord.save();
    res.send({ message: "Rätten updaterad" });
  });
});

/* GET all stats */
router.get("/newStats/:id", auth, async (req, res, next) => {
  let userId = req.user.id;
  const stats = await newStats.find({ user: userId }).sort({ date: -1 });
  return res.status(200).json(stats);
});

// //Delete specific record
// router.route('/newStats/delete/:_id').delete(auth, (req,res) => {
//   console.log(req.params._id)
//   newStats.findByIdAndDelete("req.params._id", (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.send(result);
//     });
// })

module.exports = router;
