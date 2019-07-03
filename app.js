const algoMeter = require('./algoMeter.js')
const express = require("express");
const app = express();
app.use(express.static('public'));

app.get("/run", function(request, response) {
  response.json(algoMeter.runAlgoMeter('sort'));
});

app.get("/run/function/:function", function(request, response) {
  response.json(algoMeter.runAlgoMeter(request.params['function']))
});

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
