const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.generateAccessToken = async (user) => {
    return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10000s' });
}

exports.generateRefreshToken = async (user) => {
    return jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
}

exports.comparePassword = async (plaintextPassword, hash) => {
    if (plaintextPassword != null && hash != null) {
        const result = await bcrypt.compare(plaintextPassword, hash);
        return result;
    }
    return false;
}