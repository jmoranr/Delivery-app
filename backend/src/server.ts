import express, { Request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import http, { Server } from "http";
import expressWs, { Application, Instance } from "express-ws";
import { initApiRouters } from "./init/api-routers.init";
import { initMainDatabase } from "./init/database.init";
const dotenv = require("dotenv");

dotenv.config();
initMainDatabase();

const expressApp: express.Express = express();
const currentServer: Server = http.createServer(expressApp);
const expressInstance: Instance = expressWs(expressApp, currentServer);
const app: Application = expressInstance.app;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//********** CORS ********** /
const corsOrigin: string[] = [
  `http://localhost:${String(process.env.APP_PORT)}`,
];
const corsoptions: any = {
  origin: corsOrigin,

  methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
  credentials: true, // enable set cookie
};
app.use(cors(corsoptions));

initApiRouters(app);

app.use(
  express.static(path.join(__dirname, "./../public"), {
    setHeaders(res) {
      res.setHeader("Cache-control", "public, no-cache");
    },
  })
);
function redirect(req: Request, res, next?): any {
  res.sendFile(path.resolve("public/index.html"));
}

app.get("/", function (req, res, next) {
  req.url = "index.html";

  return next();
});
app.get("/", redirect);

const port: number = parseInt(process.env.SERVER_PORT);
const requestTimeoutMs: number = parseInt(process.env.REQUEST_TIMEOUT_MS);
currentServer.listen(port);
currentServer.setTimeout(requestTimeoutMs);
console.info("Server", "Server listen on port: " + port);

// Global Handle Errors
process
  .on("unhandledRejection", (reason: any, p: Promise<any>) => {
    const method: string = "Server.ts: unhandledRejection";
    console.error(method, `Unhandled Rejection at Promise => ${reason}`, p);
    console.error(method, reason ? reason.stack : "", p);
  })
  .on("uncaught Exception", (err: any) => {
    const method: string = "Server.ts: uncaught Exception";
    console.log(method, err);
    const msg: string = `Unhandled Exception => ${err}`;
    console.error(method, msg);
    process.exit(1);
  })
  .on("SIGINT", () => {
    const method: string = "Server.ts: SIGINT";
    console.info(method, "App exit successfull");
    process.exit();
  });
