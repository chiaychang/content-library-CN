// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var content = require("../data/content");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/content", function(req, res) {
    res.json(content);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
   app.post("/api/search", function(req, res) {

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = [];

    // Here we take the result of the user"s survey POST and parse it.
    var searchData = req.body;


    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < content.length; i++) {

       if (content[i].en_us.includes(searchData.keyword) == true){
         
              bestMatch.push(content[i]);

       }

    }

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

  });



  app.post("/api/customize", function(req, res) {

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = [];

    // Here we take the result of the user"s survey POST and parse it.
    var searchData = req.body;


    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < content.length; i++) {

       if (content[i].selling_points == searchData.sellingPt && content[i].category == searchData.category && content[i].customizable == true ){
         
              bestMatch.push(content[i]);

       }

    }

    console.log("best MATCH", bestMatch);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

  });


  
  app.post("/api/content", function(req, res) {


    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = [];

    // Here we take the result of the user"s survey POST and parse it.
    var searchData = req.body;


    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < content.length; i++) {

       if (content[i].selling_points == searchData.sellingPt && content[i].category == searchData.category && content[i].customizable == false ){
         
              bestMatch.push(content[i]);

       }

    }

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

  });

};
