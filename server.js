const express = require('express');
const app = express();
const port = 3000;
// to tell app where static files are stored
app.use(express.static("frontend"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});