/* This file defines the database connection to mongodb using mongoose
 * Documentation: https://mongoosejs.com/docs/connections.html */

// Import mongoose
import mongoose from "mongoose";

/**
 * Class definition of the database connection
 * ES6 syntax (await / async )
 */
class ConnectDatabase {
  // Store the connection URL in a variable container
  connect = async () => {
    const connection = "mongodb://mongo:27017/db-contacts";
    const mongooseConfig = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    };

    await mongoose.connect(connection, mongooseConfig);
  };
}

// Export database
export default ConnectDatabase;
