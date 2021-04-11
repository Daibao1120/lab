var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    const data = [
        { id: 1, name: "呆寶" },
        { id: 2, name: "球球海獅" },
    ];
    res.json(data);
});

module.exports = router;
