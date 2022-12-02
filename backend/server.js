const app = require("./app.js");
const connectDatabase = require("./config/database.js");

const dotenv = require("dotenv");

// Handle the Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

// setting up config file
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//handle Unhandled Promise Rejections
process.on("unhandledRejection", (error) => {
  console.log(`ERROR: ${error.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
