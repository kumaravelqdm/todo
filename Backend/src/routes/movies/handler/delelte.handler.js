export const deletMovie = async (request, reply, fastify) => {
    const {
        id
    } = request.body;
        try {
            let collection = fastify.mongo.db.collection("movie");
            await collection.updateOne({ _id: id }, {
                $set: {
                    is_active:false
                }
            }, { upsert: true });
            reply.send("Movie Deleted successfully")
        } catch (e) {
            throw e
        }
}