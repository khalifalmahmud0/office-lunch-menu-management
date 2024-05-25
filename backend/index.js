// Importing required packages
const app = require("./app");

// Define the port for the server to listen on
let port = process.env.PORT || 8080;

// Start the server and make it listen on the specified port
app.listen(port, () => console.log(`Server running on port ${port}`));
