const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked,
    }).unless({
        path: [
            { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },
            {
                url: /\/api\/v1\/recommendedList(.*)/,
                methods: ['GET', 'OPTIONS'],
            },
            {
                url: /\/api\/v1\/weights(.*)/,
                methods: ['GET', 'OPTIONS'],
            },
            { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
            {
                url: /\/api\/v1\/orders(.*)/,
                methods: ['GET', 'OPTIONS', 'POST'],
            },
            `${api}/users/login`,
            //{ url: /\/api\/v1\/users\/.*/, methods: ['GET'] },
            `${api}/users/register`,
        ],
    });
}

async function isRevoked(req, payload, done) {
    /*
    // revoke token if user is an admin account
    if (!payload.isAdmin) {
        done(null, true);
    }
*/
    done();
}

module.exports = authJwt;
