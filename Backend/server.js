require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/db.connection");
connectToDB();



app.listen(3000, () => {
    console.log("Server running on PORT 3000");
});