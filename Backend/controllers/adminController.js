const Admin = require('../models/adminModel');
const Token = require('../models/tokenModel');
const Projects = require('../models/projectModel')
const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {

        const adminUser = await Admin.login(email, password)

        const payload = { email: adminUser.email, email: adminUser.email };
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        let tokenDoc = await Token.findOne({ adminId: adminUser._id });

        if (tokenDoc) {
            tokenDoc.token = refreshToken;
            await tokenDoc.save();
        } else {
            tokenDoc = await Token.create({ token: refreshToken, adminId: adminUser._id });
        }

        adminUser.refreshToken = tokenDoc._id;
        await adminUser.save();

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,      // Cannot be accessed by JavaScript
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',  // CSRF protection, use 'Lax' if needed
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiration
        });
        console.log("successfully logged in")
        return res.status(200).json({ accessToken });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
};

const createProject = async (req, res) => {
    const { name, description, link } = req.body
    if (!name || !description || !link) {
        return res.status(400).json({ message: "All fields are required: name, description, link" });
    }
    try {
        const newProject = await Projects.create({ name, description, link });
        return res.status(201).json({ message: "Project created successfully", project: newProject });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to create project", error: error.message });
    }
}



// const adminSignup = async (req, res) => {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//       // Check if the email is already taken
//       const existingAdmin = await Admin.findOne({ email });
//       if (existingAdmin) {
//         return res.status(409).json({ error: 'Email is already in use' });
//       }

//       // Hash the password before saving
//       const hashedPassword = await bcrypt.hash(password, 10);

//       // Create a new admin user
//       const newAdmin = new Admin({
//         username,
//         email,
//         password: hashedPassword,
//       });

//       // Save the admin user to the database
//       await newAdmin.save();

//       // Respond with success message
//       res.status(201).json({ message: 'Admin account created successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };

module.exports = {
    adminLogin,
    createProject
};
