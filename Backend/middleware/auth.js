const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel'); 
const Token = require('../models/tokenModel')

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];

    if (!accessToken) return res.sendStatus(401);

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            // Attach an error marker for the next middleware
            req.authError = 'Invalid access token';
            return next();
        }

        req.user = decodedToken; // Access token is valid
        next();
    });
};

const checkRefreshToken = async (req, res, next) => {
    if (!req.authError) return next(); // Skip if no authentication error from the previous middleware

    const refreshToken = req.cookies.refreshToken;

    console.log("refresh token: ", refreshToken)
    if (!refreshToken) return res.status(401).json({ error: 'Refresh token required' });

    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decodedRefreshToken) => {
            if (err) return res.status(403).json({ error: 'Invalid refresh token' });

            const tokenDoc = await Token.findOne({ token: refreshToken });
            if (!tokenDoc) {
                return res.status(403).json({ error: 'Refresh token not recognized' });
            }

            const admin = await Admin.findById(tokenDoc.adminId);
            if (!admin) {
                return res.status(403).json({ error: 'Admin not found for this refresh token' });
            }

            // Generate a new access token
            const payload = { username: admin.username, email: admin.email };
            const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

            // Attach new token to the response header
            res.setHeader('Authorization', `Bearer ${newAccessToken}`);
            req.user = payload; // Set user info for downstream use

            next();
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};  




module.exports = {
    authenticate,
    checkRefreshToken
};

