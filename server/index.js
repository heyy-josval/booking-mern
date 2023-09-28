require("dotenv").config();
const shell = require("shelljs");
const { connectDB } = require("./src/utils");
const app = require("./src/app");

const server = app.listen(process.env.PORT ?? 0, async () => {
   shell.exec("clear");
   await connectDB();
   console.log("\n\nServer running in the port", server.address().port);
   console.log(
      `To open this project click or visit: \x1b[32mhttp://localhost:${
         server.address().port
      }`
   );
});
