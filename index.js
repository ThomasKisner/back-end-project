const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const notesRoutes = require("./notes/notesRoutes");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/", notesRoutes);
//makes port dynamic
const port = process.env.PORT || 9000;
server.listen(port, () => console.log("\n Running on port 9000 \n"));
