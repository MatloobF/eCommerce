const express = require("express") ;
require("dotenv").config() ;

const router = require("./routes");

const app = express();
app.use(express.json()) ; // Middleware to parse JSON request bodies

// console.log(process.env) ;

app.use("/server", (req, res) => {
    res.send("response from server");
});
app.use("/abcd", (req, res) => {
    res.send("response from server abcd");
});

app.use("/router", router) ;

const PORT = 4000 ;

app.listen(PORT, () => {
    //console.clear() ;
    console.log(`Server is running on port ${PORT}`);
});