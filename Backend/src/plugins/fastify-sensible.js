"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  //This plugins adds some utilities to handle http errors
  fastify.register(require("@fastify/sensible"), {
    errorHandler: false,
  });
});
