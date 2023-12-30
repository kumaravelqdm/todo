export const common = {

    list: {
        schema: {
            tags: ['Common'],
            type: "object",
            required: ["collection_name"],
            body: {
                collection_name: { type: "string" },
                filter: { type: "object" },
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