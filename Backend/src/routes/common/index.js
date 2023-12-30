import { getCommonCollection } from './handler';
import { common } from './schema';

const commonRouter = (fastify, opts, done) => {

    fastify.post("/list", common.list, (req, reply) => getCommonCollection(req, reply, fastify));

    done();
}

export default commonRouter;
