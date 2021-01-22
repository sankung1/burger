const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burger: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", (req, res) => {
  burger.insertOne("burger_name", req.body.burger_name, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {

  let id = req.params.id;

  burger.updateOne(id, (result) => {
    if (result.changedRows == 0) {
      // if there's no id found send a 404 message
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;