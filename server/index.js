import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


// Components
import Connection from "./models/database.js";
import Router from "./routes/route.js";


const app = express();


app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", Router);


const PORT = 8000;
app.listen(PORT, () => {
    try {
        console.log(`Bsdk chalu hua tera server ${PORT} pr`);
    } catch (error) {
        console.log(error);
    }
});


Connection();


