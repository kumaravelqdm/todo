"use strict";

// Importing Modules to Start Server
import AutoLoad from "@fastify/autoload";
import path from "path";
import Fastify from "fastify";
import dotenv from "dotenv";

// Importing Routes
import { publicRouter } from './routes';

const multer = require("fastify-multer");

dotenv.config();

// Configure the framework and instantiate it
const fastify = Fastify({
    logger: true
});


// This loads all plugins defined in plugins those should be support plugins that are reused through your application
fastify.register(AutoLoad, {
    dir: path.join(__dirname, "./plugins"),
});

fastify.register(multer.contentParser)

//Configuring the routes
fastify.register(publicRouter, { prefix: '/api/v1' });

// Run the server!
// Run the server!
fastify.listen({ port: process.env.PORT }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        throw err
    }
    fastify.log.info(`server listening on ${address}`)
})