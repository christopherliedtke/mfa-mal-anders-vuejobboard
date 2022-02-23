const mongoose = require("mongoose");

mongoose
  .connect(process.env.MDB_URI, {
    dbName: process.env.MDB_NAME,
    user: process.env.MDB_USER,
    pass: process.env.MDB_PASSWORD,
    ignoreUndefined: true,
  })
  .then(() => console.log("-----> mongoDB connected..."))
  .catch(err =>
    console.log("-----> Error trying to connect to mongoDB: ", err)
  );

mongoose.connection.on(
  "error",
  console.error.bind(console, "-----> mongoDB connection error")
);

module.exports = mongoose;
