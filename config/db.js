const mongoose = require("mongoose"); // mongoose handles with data
const config = require("config"); // importing config module from node
const dbUrl = config.get("mongoURI"); // getting user data and storing in db

const connectDB = async () => {
  try {
    await mongoose.set("useCreateIndex", true);
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }); // connecting db i.e. url to mongoose
  } catch (err) {
    console.log(err.message); // error is displayed , if any
    process.exit(1);
  }
}

module.exports = connectDB;
