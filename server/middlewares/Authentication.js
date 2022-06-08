const jwt = require('jsonwebtoken')
const prisma = require('../instance');

const { isNull } = require("../utils/generic");

// This should be used to authenticate users
// helps to know Who made the request ?
const verifyToken = async (req, res, next) => {
    const secret = process.env?.JWT_SECRET
    const authHeader = req.header("Authorization"); 

    req.authenticated = false
    req.user = null
    req.token = null

    if (isNull(authHeader) || !authHeader.startsWith("Bearer ")) return next()

    const authHeaderDivided = authHeader.split(" "); 

    if (authHeaderDivided.length <= 1) return next()
    
    const token = authHeaderDivided[1]

    if (!token) return next()

    try {
        const payload = jwt.verify(token, secret)

        if (!payload?.username) return next()

        const user = await prisma.user.findUnique({
            where: {
                username: payload.username
            }
        })


        if (!user) return next()

        req.user = user
        req.authenticated = true
        req.token = token
        req.token_type = 'access' // access or refresh
    } catch {}

    next()
}

// This should be used to authorize only authenticated requests
const authenticatedOnly = (req, res, next) => {
    if (req.authenticated || req.user) return next();

    res.status(401).json({ ok: false, errors: ['authentication_required']})
}

module.exports = {
    verifyToken,
    authenticatedOnly
}