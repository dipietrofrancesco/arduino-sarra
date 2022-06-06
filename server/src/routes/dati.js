const express = require("express");
const router = express.Router();
const controller = require("../controllers/dati")

router.post('/new-record', controller.postDato);

router.get('/fetch', controller.getDati);

module.exports = router;