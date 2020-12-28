const Twitter = require("twit");
const port = 3000;

const apiClient = new Twitter({
  consumer_key: ".....",
  consumer_secret: "....",
  access_token: ".....",
  access_token_secret: "....."
});

module.exports = {
  port,
  apiClient
};
