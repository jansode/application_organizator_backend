const jwt = require('jsonwebtoken')

const getTokenFrom = (request) => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        return authorization.substring(7)
    }
    return null
}

const getDecodedToken = (request) => {
    const token = getTokenFrom(request)
    if(token == null)
    {
        return null
    }

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if(!decodedToken.id){
        return null
    }

    return decodedToken 
}

module.exports = { getTokenFrom, getDecodedToken }

