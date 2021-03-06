const express = require ("express")
const router = express.Router()
const path = require ("path")

const mainController = require ("../controllers/mainController")

router.get ("/", mainController.index);
router.get ("/about", mainController.about);

module.exports = router;