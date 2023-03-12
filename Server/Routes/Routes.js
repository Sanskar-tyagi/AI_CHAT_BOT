const { test, chapGPT } = require("../Controller/User");
const express = require("express");

const router = express();
router.get("/test", test);
router.post("/generate-response", chapGPT);
module.exports = router;
