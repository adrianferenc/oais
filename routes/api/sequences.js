const express = require("express");
const router = express.Router();
const sequencesCtrl = require("../../controllers/api/sequences.js");
//const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/:id", sequencesCtrl.show);

module.exports = router;
