const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/unauthorized-err");
// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { Authorization } = req.headers;

  if (!Authorization || !Authorization.startsWith("Bearer ")) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  const token = Authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, "secret-key");
  } catch (err) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  req.user = payload;

  next();
};
