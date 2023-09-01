const express = require('express');
const { user } = require('./routes');


const app = express();
app.use(express.json());

const PORT = 3001 | process.env.APP_PORT


app.use('/user', user)


app.listen(PORT, () => console.log('API on ' + PORT))