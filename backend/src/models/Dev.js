const mongose = require('mongoose')

const DevSchema = new mongose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
})

module.exports = mongose.model('Dev', DevSchema)