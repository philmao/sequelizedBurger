var db = require("../models");

// Routes
// =============================================================module.exports = function(app) {
module.exports = function(app) {

  // GET route 
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      // We have access to the burgers as an argument inside of the callback function
      res.render("index", hbsObject);
    });
  });

  // GET route for getting all of the burgers
  app.get("/api/all", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // POST route for saving a new burger. You can create a burger using the data on req.body
  app.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.redirect("/");
    });
  });

  // PUT route for updating burger. The updated burger will be available in req.body
  app.put("/:id", function(req, res) {

    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.redirect("/");
    });
  });

}
