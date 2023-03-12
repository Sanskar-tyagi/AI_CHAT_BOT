const { test, OpenAi } = require("../Controller/User");
const express = require("express");

const router = express();
router.get("/test", test);
router.post("/generate-response", OpenAi);
module.exports = router;
