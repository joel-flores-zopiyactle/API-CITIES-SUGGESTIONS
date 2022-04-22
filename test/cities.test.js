const supertest = require('supertest')
const {app, server} = require('../app')

const api = supertest(app)

describe('GET /cities', function() {

    test('Cities are returned Json', async () => {
        await api
        .get('/api/v1/cities/search?q=London')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('Should return an error message if no "q" parameters are sent.', async () => {
        const res = await api.get('/api/v1/cities/search')
        
        expect(res.body.error).toBe('Falta el parametro \"q\" para realizar la consulta y no puede ser vacía');
    })

    test('Should return an empty array if there are no results', async() => {
        const res = await api.get('/api/v1/cities/search?q=JoelFlores')

        expect(res.body.search).toEqual([])
    })

    test('Should return an array with longitude 1 if the parameters of "q", "latitude" are sent', async() => {
        const res = await api.get('/api/v1/cities/search?q=London&latitude=41.35565')

        expect(res.body.search).toHaveLength(1)
    })

    test('Should return an array with longitude 1 if the parameters of "q", "latitude", "longitude" are sent', async() => {
        const res = await api.get('/api/v1/cities/search?q=London&latitude=41.35565&longitude=-72.09952')

        expect(res.body.search).toHaveLength(1)
    })
    test('Should return an empty array if searching for a "latitude" or "longitude" that does not exist', async() => {
        const res = await api.get('/api/v1/cities/search?q=London&latitude=41.355656836483643964892')

        expect(res.body.search).toEqual([])
    })


})


afterAll(() => {
    server.close()
});