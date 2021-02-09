const config = require("./config");
const swaggerAutogen = require("swagger-autogen")();
const endpointsFiles = ["./app.js"];

const fs = require("fs");
if (!fs.existsSync(config.apidoc.path)) {
  fs.mkdirSync(config.apidoc.path);
}

swaggerAutogen(
  config.apidoc.outputfile,
  endpointsFiles,
  config.apidoc.description
).then(() => {
  require("./app.js");
});
