const debug = require("debug")("whatsthehit:api"),
  express = require("express"),
  router = express.Router(),
  auth = require("../config/auth")

router.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});

router.use(auth)

//Query al database

router.post("/select", require("../db/select"));
router.post("/create", require("../db/create"))
router.post("/drop", require("../db/drop"));
router.post("/insert", require("../db/insert"));
router.post("/delete", require("../db/delete"));

//Richieste a wikidata

router.get("/wiki", require("../wiki/request"))

module.exports = router;