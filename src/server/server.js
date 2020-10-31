import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {defaultState} from './default-state';

let port = 7777;
let app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.listen(port, console.info("Server running, listening on port ", port));

app.post("/data", async (req, res) => {
    let state = await getData();
    res.send({ state });
});

const getData = async () => {
    return defaultState;
}
