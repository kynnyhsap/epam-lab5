function fetchRandomUsers(n = 50, page = 1) {
    return request(`https://randomuser.me/api/?results=${n}&page=${page}`, { method: 'GET' })
        .then((rawData, statusCode) => {
            const { results } = JSON.parse(rawData)
            return results
        })
        .catch(console.error)
}