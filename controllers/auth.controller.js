const { User } = require("../models");
const { generateAccessToken, generateRefreshToken, comparePassword } = require("../utils/utils");

exports.login = async (req, res, next) => {
  try {   
    const { email, password } = req.body
    const user = await User.findOne({ where: { email }});
    const isPassword = await comparePassword(password, user.password)

    if (user && isPassword){
      accessToken = await generateAccessToken(user)
      refreshToken = await generateRefreshToken(user)
          
      res.status(200).json({
        message: "Login successful",
        accessToken,
        refreshToken
      })
    } else {
      res.status(401).json({
        message: "Login not successful",
        error: "",
      })
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    })
  }
};

exports.refreshToken = async (req, res, next) => {
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

};