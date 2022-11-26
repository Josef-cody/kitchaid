/*jslint es6 */
const express = require('express')
const auth = require("../config/auth");
const router = express.Router();
const newOrder = require("../models/newOrder");
const app = express();
const cors = require('cors')
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.SERVER_URL); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// add new order ////////

router.route("/newOrder/:id").post(auth, (req, res) => {
  let userId = req.user.id;
  const {
    user,
    deliverDate,
    // ordersType,
    itemToOrder,
    // remainInStock,
    // unitRemain,
    toOrder,
    unitToOrder,
    comment
  } = req.body;

    if (!deliverDate || !itemToOrder || !toOrder) {
      return res.send({ message: "Please Fill All Fields" });
    }
    //New order created
    const newToOrder = new newOrder({
      user: userId,
      deliverDate,
      // ordersType,
      itemToOrder,
      // remainInStock,
      // unitRemain,
      toOrder,
      unitToOrder,
      comment
    });
    console.log(newToOrder)
    newToOrder.save()
    res.send({ message: "Varor updaterad" })
});





/* GET all orders */

router.route('/newOrder/:id').get(auth, async (req, res, next) => {
  let userId = req.user.id;
  const date = req.body.deliverDate;
  const orders = await newOrder.find({ user: userId }).sort({ deliverDate: 'desc' });
  return res.status(200).json(orders);

});




module.exports = router;