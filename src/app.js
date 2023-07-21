const express = require('express');
require("./db/connection"); 
const Student = require("./models/students");
const StudentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(StudentRouter);

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});


