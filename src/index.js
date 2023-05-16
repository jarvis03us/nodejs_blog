import express from 'express';
import viewEngine from './configs/viewEngine';

const app = express();
const port = 3000;
var morgan = require('morgan');

viewEngine(app);

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
