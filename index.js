const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const notesRoutes = require("./notes/notesRoutes");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/", notesRoutes);
server.listen(9000, () => console.log("\n Running on port 9000 \n"));
