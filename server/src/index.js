"use strict";

const Path = require("path");
const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const port = process.env.PORT || 3000;
const routes = require("./routes");
const settings = require("../settings");

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: "localhost",
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "public")
      }
    }
  });
  
  await server.register(Inert);

  server.route({
    method: "GET",
    path: "/web",
    handler: (request, response) => {
      return response.file("index.html");
    }
  });

  routes.register(server);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();