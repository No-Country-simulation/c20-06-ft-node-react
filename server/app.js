import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./src/routes/index.js";

import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);

app.listen(3000, () => {
    console.log('Corriendo api puerto 3000');
})

export default app;
