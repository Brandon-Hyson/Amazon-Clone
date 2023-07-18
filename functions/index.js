
const functions = require("firebase-functions");
//const admin = require("firebase-admin").initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51NNd2RAeVGQHZ63jzITeWpVYPmjcRckdFEAbpIJXuJBB2GWIPOP51UOs5dHmqIyak1GhrQplwglvUv9XKMZ65vkw00OdNEXRaw');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello");
});

app.post("/payments/create", async (request, response) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//exports.api = functions.https.onRequest(app);
app.listen(5000);

exports.api = functions.https.onRequest(app)

//http://127.0.0.1:5001/clone-45497/us-central1/api