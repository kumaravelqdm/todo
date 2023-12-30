import commonRouter from "./common";
import movieRouter from "./movies"

//public Routes
export const publicRouter = (fastify, opts, done) => {
    fastify.register(commonRouter, { prefix: "/common" });
    fastify.register(movieRouter, { prefix: "/movie" });
    done();
  };