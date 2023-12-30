export const moviesList =  async (request, reply, fastify) => {
    const { filter } = request.body;
    const movie = fastify.mongo.db.collection('movie');
    if (filter) {
        if (filter.name) {
            extrs = { name: { '$regex': `${filter.name}`, '$options': 'i' } }
        }
    }

    const list = await movie.aggregate([
        { $sort: { created_at: -1 } },
        {
            $addFields: {
                movie_id: { $convert: { input: '$_id', to: 'objectId', onError: '', onNull: '' } }
            }
        },
        {
            $lookup: {
                from: "track",
                localField: "movie_id",
                foreignField: "movie_id",
                as: "track"
            }
        },
        {
            $lookup: {
                from: "cast",
                localField: "movie_id",
                foreignField: "movie_id",
                as: "cast"
            }
        },
        {
            $lookup: {
                from: "release",
                localField: "movie_id",
                foreignField: "movie_id",
                as: "release"
            }
        },
        {
            "$facet": {
                "data": [
                    { "$skip": filter.offset || 0 },
                    { "$limit": filter.limit || 10 }
                ],
                "pagination": [
                    { "$count": "total" }
                ]
            }
        }
    ]).toArray()
    reply.send(list)
}