/* eslint-disable indent */
import * as functions from "firebase-functions";
import next from "next";
const dev = false;
// eslint-disable-next-line object-curly-spacing
const app = next({ dev, conf: { distDir: "next" } });
const handle = app.getRequestHandler();
// eslint-disable-next-line indent
export const nextApp = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl);
  return app.prepare().then(() => handle(req, res));
});
