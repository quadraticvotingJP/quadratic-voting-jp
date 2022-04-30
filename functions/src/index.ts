/* eslint-disable indent */
import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest(
  // eslint-disable-next-line indent
  (request: any, response: any) => {
    // eslint-disable-next-line indent
    // eslint-disable-next-line object-curly-spacing
    functions.logger.info("Hello logs!", { structuredData: true });
    // eslint-disable-next-line indent
    response.send("Hello from Firebase!");
    // eslint-disable-next-line indent
  }
);
