
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/kmitrovic/projects/workcademy-firebase/functions/baza.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default db;
