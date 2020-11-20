const MongoDB = require("mongodb").MongoClient;
const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "db-untar-cafe";

MongoDB.connect(dbURL, (error, client) => {
  if (error) throw error;
  let db = client.db(dbName);
  db.collection("untar-cafe")
    .find()
    .toArray((error, data) => {
      if (error) throw error;
      console.log(data);
    });
});
