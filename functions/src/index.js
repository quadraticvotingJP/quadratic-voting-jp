/* eslint-disable indent */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const functions = require("firebase-functions");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const next = require("next");
const dev = process.env.NEXT_PUBLIC_NODE_ENV !== "production";
// eslint-disable-next-line object-curly-spacing
const app = next({ dev, conf: { distDir: "next" } });
const handle = app.getRequestHandler();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const nextApp = functions.https.onRequest(
  // eslint-disable-next-line indent
  (req, res) => {
    console.log("File: " + req.originalUrl);
    return app.prepare().then(() => handle(req, res));
  }
);

export default nextApp;
