const app = require("./app.js");
const connectDatabase = require("./config/database.js");

const dotenv = require("dotenv");

// setting up config file
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
