require("dotenv").config();
const { connectDB } = require("./src/utils");
const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, async () => {
   await connectDB();
   console.log("Server running in the port", PORT);
});
