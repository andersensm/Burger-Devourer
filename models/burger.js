var orm = require("../config/orm.js")

console.log("Model Working!")

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
