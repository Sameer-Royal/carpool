const { Router, response } = require("express");
const express = require("express");
const router = express.Router();

router.route('/') .get(async (req, res, next) => {
      try {
        res.send("done");
      } catch (error) {
        res.send(error);
      }
    })

module.exports=router;