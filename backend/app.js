const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// routers
readdirSync("./routes").map((routes) =>
  app.use("/api/v1", require("./routes/" + routes))
);

const server = async () => {
  db(); // Call db function with await keyword
  app.listen(PORT, () => {
    console.log("You are listening to port", PORT);
  });
};

server();

// CORS is a middleware that allows you to configure your server to accept requests from other domains. It adds the necessary headers to your HTTP responses to inform the browser that it is safe to make requests from a different domain. This is useful when building APIs that are consumed by web applications running on different domains. Without CORS, the browser would block these requests, and the API would be inaccessible.

/*This is a code snippet in JavaScript that sets up an Express server for a web application. The server listens for incoming requests on a specified port (process.env.PORT).

The code first imports the required modules, including express for setting up the server, cors for configuring the server to accept requests from other domains, and readdirSync for reading the contents of a directory.

The app.use function sets up middleware functions to handle incoming requests. The express.json() middleware function parses incoming JSON payloads, while the cors() middleware function allows requests from other domains.

The code then maps the contents of a directory (./routes) to router middleware functions using app.use. Each file in the directory exports a router middleware function that handles specific requests.

The db() function connects the server to a MongoDB database specified in the MONGO_URL environment variable using the mongoose library.

Finally, the server() function is called, which starts the server and listens for incoming requests on the specified port. */