export const getCommonCollection = async (request, reply, fastify) => {
    try {

        const collection_name = fastify.mongo.db.collection(permittedCollection[request.body.collection_name])
        let filter = request?.body?.filter ?? {}
        Object.keys(filter).map(val => {
            if (!filter[val]) {
                delete filter[val]
            }
        })
        if (filter._id) {
            filter._id = fastify.mongo.ObjectId(filter._id)
        }
        const docs = await collection_name.find(filter).toArray()
        reply.send(docs)
    } catch (err) {
        reply.code(err.statusCode || 400).send({
            statusCode: err.statusCode || 400,
            type: "Error",
            message: err.message,
        });
    }
}

const permittedCollection = {
    movie: "movie",
    track: "track"
}