const express = require('express');
const router = express.Router();

const APPLICATION_KEY = 'YOUR_API_KEY',
      APPLICATION_ID = 'YOUR_APP_KEY';

const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
  application_id: APPLICATION_ID,
  application_key: APPLICATION_KEY
});

router.get('/', (req, res, next) => {
  const url = req.query.url
  textapi.combined({
    'url': url,
    'endpoint': ['extract', 'summarize']
  }, function(error, response) {
    if (error === null) {
      const title = response.results[0].result.title;
      const summary = response.results[1].result.sentences;
      const data = {title: title, summary: summary}
      res.json(data);
    }
  });
});

module.exports = router;
