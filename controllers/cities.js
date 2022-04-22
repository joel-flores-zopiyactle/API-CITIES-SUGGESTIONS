const citiesDB = require('../db/cities')

const searchCities = async (req, res) => {

    try {
        const { q, latitude = 0, longitude = 0 } = req.query
        let resultSearch = []
        
        // Filter one
        resultSearch = citiesDB.filter( city => city.name.includes(q))
        .map(city => {

            const scoreRandom = Math.random().toString()
            const score       = Number.parseFloat(scoreRandom.slice(0,3))

            return {
                "name"      : `${city.name}, ${city.country}`,
                "latitude"  : city.lat,
                "longitude" : city.long,
                "score"     : score
            }
        })

        // Filter Two
        if(latitude !== 0) {
            resultSearch = resultSearch.filter(city => latitude === city.latitude)
        }

        // Filter Three
        if(longitude !== 0) {
            resultSearch = resultSearch.filter(city => longitude === city.longitude)
        }

        // Order cities by scores
        const orderCitysScore = resultSearch.sort((a,b) => b.score - a.score)

        res.status(200)
        res.json({search:orderCitysScore})

    } catch (error) {
        res.status(401)
        res.json( { error : "Ocurrió un error al consultar los datos" })
    }
}

module.exports = { searchCities }