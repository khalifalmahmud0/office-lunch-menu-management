// Importing required packages
const { dotenv, express, cors } = require("./src/helpers/packages");

// Create an Express application
const app = express();

// Load environment variables from a .env file (if available)
dotenv.config();

// Middleware setup for security and other purposes
app.use([
  cors(), // Enable Cross-Origin Resource Sharing (CORS)
]);

// Export the Express application to be used elsewhere
module.exports = app;
