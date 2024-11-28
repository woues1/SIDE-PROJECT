const { check, validationResult } = require('express-validator');

const validateSkill = [
    check('skill').notEmpty().withMessage('Skill is required'),
    check('level').isInt({ min: 1, max: 10 }).withMessage('Level must be between 1 and 10'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateSkill };