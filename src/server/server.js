import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

let port = 7777;
let app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.listen(port, console.info("Server running, listening on port ", port));

app.get("/test", async (req, res) => {
    res.status(200).send();
});
