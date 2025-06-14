const db = require("mongoose");

const connectDB = async () => {
  await db.connect(process.env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongo connected");
};

module.exports = connectDB;
