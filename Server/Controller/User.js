const express = require("express");
const Router = express();
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const { OPEN_AI } = require("../config/Utlis");
// we will define functions to handle req on this route
const test = (req, res) => {
  res.send("Hello User");
};

const configuration = new Configuration({
  apiKey: OPEN_AI,
});
const openai = new OpenAIApi(configuration);

const chapGPT = async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  const responseData = response["data"]["choices"][0]["message"]["content"];
  res.send(responseData);
};

module.exports = { test, chapGPT };
