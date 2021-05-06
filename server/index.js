const express = require('express');
const app = express();
const port = 5000;
// mongodb
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require("./config/key");
const cors = require("cors");

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected.."))
.catch(err => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
   res.send("시작"); 
});

app.use('/api/users', require('./routes/user'));
app.use('/api/book', require('./routes/bookrecord'));

app.listen(port, () => {
    console.log(`Start... http://localhost:${port}`);
})