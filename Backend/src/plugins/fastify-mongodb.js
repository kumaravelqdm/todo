"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/mongodb'), {
      url: `${process.env.DB_URL}/${process.env.DB}?${process.env.DB_OPTION}`
    })
});
