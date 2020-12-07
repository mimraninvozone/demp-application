const express = require('express');
const app = express();
const routes = require('./routes/api');
require('dotenv/config');
const port = process.env.PORT;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
