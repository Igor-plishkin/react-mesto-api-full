const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/unauthorized-err");
// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, "secret-key");
  } catch (err) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  req.user = payload;

  return next();
};
