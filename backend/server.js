const express = require("express");
const config = require("./config");
const app = express();

app.use(require("cors")());

// Search Tweets by keywords
app.get("/search/:word", (req, res) => {
  let hastag = req.params.word;
  console.log(hastag);
  const params = { count: 50, tweet_mode: "extended", q: hastag, include_entities: true, result_type: "recent" };
  config.apiClient
    .get("search/tweets", params)
    .then((results) => res.send(results))
    .catch((error) => {
      res.send(error);
    });
});

app.listen(config.port, () => {
  console.log("Server running on port " + config.port);
});
