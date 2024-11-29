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
    if (!req.authError) return next();

    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ error: 'Refresh token required' });

    try {
        // Verify the refresh token
        let decodedRefreshToken;
        try {
            decodedRefreshToken = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        } catch (err) {
            return res.status(403).json({ error: 'Invalid refresh token' });
        }

        // Find the token document in the database
        const tokenDoc = await Token.findOne({ token: refreshToken });
        if (!tokenDoc) {
            throw new Error('Refresh token not recognized');
        }

        // Find the admin associated with the refresh token
        const admin = await Admin.findById(tokenDoc.adminId);
        if (!admin) {
            throw new Error('Admin not found for this refresh token');
        }

        // Create a new access token and store it in the request
        const payload = { username: admin.username, email: admin.email };
        const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        req.newAccessToken = newAccessToken;  // Store new access token in the request object
        req.user = payload;  // Attach user payload for downstream use

        next();
    } catch (err) {
        console.error('Error verifying refresh token:', err);
        res.status(403).json({ error: err.message });
    }
};



module.exports = {
    authenticate,
    checkRefreshToken
};

