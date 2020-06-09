const express = require("express");
const mongoose = require("mongoose");
//var MONGODB_URI= process.env.MONGODB_URI

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://hjb:Monkey21!Lol@ds211268.mlab.com:11268/heroku_xlcdjnp8", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

mongoose.connect(MONGODB_URI);