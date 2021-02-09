var config = {};

config.web = {};
if (process.env.PORT == undefined) {
  config.web.host = "localhost:8000";
} else {
  config.web.host = "numbly-api.herokuapp.com";
}

config.web.port = process.env.PORT || 8000;

config.apidoc = {};
config.apidoc.path = "./generated-apidoc";
config.apidoc.filename = "swagger.json";
config.apidoc.outputfile = "./generated-apidoc/swagger.json";
config.apidoc.description = {
  info: {
    title: "Numbly REST API",
    description:
      "Greetings dear developer! This is the all-in api of the number-based guessing game called Numbly you have seen. Enjoy it!",
  },
  host: config.web.host,
  schemes: ["https", "http"],
};

module.exports = config;
