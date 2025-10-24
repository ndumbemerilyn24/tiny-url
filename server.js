const express = require('express');
const app = express();


app.get('/shorten', (req, res) => {
  const longUrl = req.query.url;  
  res.json({ url: longUrl });     
});


app.listen(5001, () =>console.log('server up'));