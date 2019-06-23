const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with the "/api/items"
router.route("/")
    .get(itemController.findById)
    .post(itemController.create);

// Will make more routes for weapons and spells after

module.exports = router;