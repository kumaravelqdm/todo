const { ObjectId } = require('@fastify/mongodb')

export const upsertMovie = async (request, reply, fastify) => {
    const {
        movieData, trackData, releaseData, castData
    } = request.body;
    console.log("asasas")
    if (movieData._id) {
        let movie_id = fastify.mongo.ObjectId(movieData._id);
        await updateCollection({ fastify, collectionName: 'movie', data: { ...movieData, _id: movie_id } });
        await updateCollection({ fastify, collectionName: 'track', data: { ...trackData, movie_id } });
        await updateCollection({ fastify, collectionName: 'release', data: { ...releaseData, movie_id } });
        await updateCollection({ fastify, collectionName: 'cast', data: { ...castData, movie_id } });
    } else {
        let movie_id = await new ObjectId();
        await insertCollection({ fastify, collectionName: 'movie', data: { _id: movie_id, ...movieData } });
        await insertCollection({ fastify, collectionName: 'track', data: { movie_id, ...trackData } });
        await insertCollection({ fastify, collectionName: 'release', data: { movie_id, ...releaseData } });
        await insertCollection({ fastify, collectionName: 'cast', data: { movie_id, ...castData } });
    }

    reply.send(movieData._id ? "Movie updated successfully" : "Movie created successfully")
}

const insertCollection = async ({ fastify, collectionName, data }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let collection = fastify.mongo.db.collection(collectionName);
            let response = await collection.insertOne({
                ...data
            });
            resolve(response)
        } catch (e) {
            reject(e)
            throw e
        }

    })
}

const updateCollection = async ({ fastify, collectionName, data }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let collection = fastify.mongo.db.collection(collectionName);
            let response = await collection.updateOne({ _id: id }, {
                $set: {
                    ...data
                }
            }, { upsert: true });
            resolve(response)
        } catch (e) {
            reject(e)
            throw e
        }
    })
}