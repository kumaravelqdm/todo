import { upsertMovie, deletMovie, moviesList } from './handler';
import { movie } from './schema';

const movieRouter = (fastify, opts, done) => {

    fastify.post("/upsert", movie.upsert, (req, reply) => upsertMovie(req, reply, fastify));
    fastify.post("/delete", movie.upsert, (req, reply) => deletMovie(req, reply, fastify));
    fastify.post("/view", movie.upsert, (req, reply) => moviesList(req, reply, fastify));

    done();
}

export default movieRouter;