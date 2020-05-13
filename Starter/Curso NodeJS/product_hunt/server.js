const express = require("express");
const port = 3001;
const app = express();

app.get('/', (req, res) => {
    res.send("hellfasdfasdo")
});

app.listen(port, () => console.log(`Server is running on ${port}`))