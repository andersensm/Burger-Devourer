var express = require("express")
var router = express.Router();
var burger = require("../models/burger.js")

console.log("Controller working!")

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log(data);
        var allBurgers = {
            brgs: data
        };
        // console.log(hbsObject);
        res.render("index", allBurgers);
    });
});

router.post("/api/burger", function(req, res) {
    // Colums, [forminput, boolean = false;
    burger.add(["burger_name", "devoured"], [req.body.burger_name, "0"], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

     console.log("condition", condition);

     burger.update({
       devoured: req.body.devoured
     }, condition, function(result) {
       if (result.changedRows == 0) {
         // If no rows were changed, then the ID must not exist, so 404
         return res.status(404).end();
       } else {
         res.status(200).end();
       }
     });
});

router.delete('/api/burger/:id', function(req, res) {
                var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;
