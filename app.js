const algoMeter = require('./algoMeter.js')
const express = require("express");
const app = express();
app.use(express.static('public'));

app.get("/run", function(request, response) {
  response.json(algoMeter.runAlgoMeter('array', 'sort'));
});

app.get("/run/type/:type/function/:function/secondArgument/", function(request, response) {
  type = request.params['type']
  fn = request.params['function']
  response.json(algoMeter.runAlgoMeter(type, fn))
});

app.get("/run/type/:type/function/:function/", function(request, response) {
  type = request.params['type']
  fn = request.params['function']
  response.json(algoMeter.runAlgoMeter(type, fn))
});

app.get("/run/type/:type/function/:function/secondArgument/:secondArgument", function(request, response) {
  type = request.params['type']
  fn = request.params['function']
  secondArgument = request.params['secondArgument']
  response.json(algoMeter.runAlgoMeter(type, fn, secondArgument))
});


app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
