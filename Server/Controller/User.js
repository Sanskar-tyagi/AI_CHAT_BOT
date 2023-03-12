const express = require("express");
const Router = express();
const axios = require("axios");
const OPEN_AI = require("../config/Utlis");
// we will define functions to handle req on this route
const test = (req, res) => {
  res.send("Hello User");
};
const OpenAi = async (req, res) => {
  const prompt = req.body.prompt;
  const apiKey = OPEN_AI; // replace with your own API key

  try {
    const response = await axios.post("https://api.gpt3turbo.com/gpt", {
      prompt,
      apiKey,
      length: 50, // number of words to generate
    });

    const generatedResponse = response.data.text.trim();
    res.send({ response: generatedResponse });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = { test, OpenAi };
