export const objectToQuery = (object: object) => {
    let query: string = ''

    for (const [key, value] of Object.entries(object)) {
        if(query === '') {
            query = query + '?'
        } else {
            query = query + '&'
        }

        query = query.concat(`${key}=${value}`)
    }

    return query
}