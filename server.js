const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const { products } = require("./endpoints");

const app = express();
const port = 3000;

products;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const usertHandlers = users({ axios });

app.get("/", usertHandlers.get);

app.post("/", usertHandlers.post);

app.put("/:id", usertHandlers.put);

app.delete("/:id", usertHandlers.delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
