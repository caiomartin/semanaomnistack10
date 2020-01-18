const Dev = require('../models/Dev')
const parseStringArray = require('../utils/parseStringArray')

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query
        const techsArray = parseStringArray(techs)
        console.log(techsArray)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point', 
                        coordinate: [longitude, latitude]
                    },
                    $masgDistance: 10000
                }
            }
        })


        return response.json({ devs })
    }
}