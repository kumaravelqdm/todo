export const movie = {

    upsert: {
        schema: {
            tags: ['Movies'],
            type: "object",
            required: ["movie_data", "track_data", "cast_data", "release_data"],
            body: {
                movie_data: { type: "object" },
                track_data: { type: "object" },
                cast_data: { type: "object" },
                release_data: { type: "object" },
            }
        },
        querystring: {
            /** ... */
        },
        params: {
            /**.... */
        },
        headers: {
            /**... */
        },
    }
}