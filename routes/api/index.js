const path = require("path");
const router = require("express").Router();
const itemRoutes = require("./items");

// Item Routes
router.use("/items", itemRoutes);

// Anything else render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;