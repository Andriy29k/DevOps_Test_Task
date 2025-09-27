const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const COLOR = process.env.BG_COLOR || 'white';

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Hello SPA</title></head>
      <body style="background-color:${COLOR}; display:flex; justify-content:center; align-items:center; height:100vh; color:white; font-size:48px;">
        Hello from ${process.env.BRANCH || 'local'}
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
