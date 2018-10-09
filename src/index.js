var names = require("./starwars-names.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: names,
  random: uniqueRandomArray(names)
};
