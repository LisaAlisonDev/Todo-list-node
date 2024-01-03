const {User} = require("../models");

const { generateAccessToken, generateRefreshToken, comparePassword } = require("../services/auth.service");
const asyncHandler = require("express-async-handler");


exports.login = async (req, res, next) => {
  console.log(req.body)
    const { email, password } = req.body
    try {
        
        const user = await User.findOne({where :  email });
      
        if (!user || !comparePassword(password, user.password)) {
          res.status(401).json({
            message: "Login not successful",
            error: "User not found",
          })
        } else {
          accessToken = await generateAccessToken(user)
          refreshToken = await generateRefreshToken(user)
          res.status(200).json({
            message: "Login successful",
            accessToken
          })
        }
      } catch (error) {
        res.status(400).json({
          message: "An error occurred",
          error: error.message,
        })
      }  
};

exports.refreshToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401)
    }

    const refreshedToken = generateAccessToken(user);
    res.send({
      accessToken: refreshedToken,
    });
  });

});