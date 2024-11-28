const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const Token = require('../models/tokenModel')

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];
    req.authError = null
        
    if (!accessToken) {
        req.authError = 'Access token missing';
        return next(); // Pass control to the next middleware (e.g., `checkRefreshToken`)
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            req.authError = 'Invalid or expired access token';
            return next(); // Pass control to the next middleware
        }
        req.user = decodedToken; // Attach decoded token payload to the request
        if (req.originalUrl === '/api/admin/token/validate') {
            return res.status(200).json({message: 'Access token is valid'})
        }
        return next(); // Access token is valid, proceed to the next middleware or route
    });
};

const checkRefreshToken = async (req, res, next) => {
    // If no auth error, skip this middleware
    if (!req.authError) return next();
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token required' });
    }

    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decodedRefreshToken) => {
            if (err) {
                return res.status(403).json({ error: 'Invalid refresh token' });
            }

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
            const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

            // Respond with the new access token
            res.status(200).json({ newAccessToken });
            req.user = payload; // Attach user payload for downstream use
            next(); // Continue to the next middleware or route
        });
    } catch (err) {
        console.error('Error verifying refresh token:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = {
    authenticate,
    checkRefreshToken
};

