const mongoose = require('mongoose');

const url = "mongodb://Gyana-PB:Mongo-Pass123@ac-uzmlokh-shard-00-00.3uolikk.mongodb.net:27017,ac-uzmlokh-shard-00-01.3uolikk.mongodb.net:27017,ac-uzmlokh-shard-00-02.3uolikk.mongodb.net:27017/quora-clone-mern?ssl=true&replicaSet=atlas-hal4au-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };