const config = require("./config");
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");

const swaggerFile = require(config.apidoc.outputfile);

app.get("/test", (req, res) =>
  res.send("I'm the first endpoint for Numbly was developed!")
);
app.get("/test2", (req, res) => res.send(config.web.host));
app.listen(config.web.port, () => {
  console.log("Listening on http://" + config.web.host);
});

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));
