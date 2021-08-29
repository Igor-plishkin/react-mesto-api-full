const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/unauthorized-err");
// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  console.log(JWT_SECRET);

  if (!req.cookies.jwt) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  const token = req.cookies.jwt;
  let payload;

  const YOUR_JWT = '';
// вставьте сюда JWT, который вернул публичный сервер студента

const SECRET_KEY_DEV = '';
// вставьте сюда секретный ключ для разработки из кода студента


try {
  const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);

  console.log('\x1b[31m%s\x1b[0m', `
    Надо исправить. В продакшне используется тот же
    секретный ключ, что и в режиме разработки.
  `);
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются'
    );
  } else {
    console.log(
      '\x1b[33m%s\x1b[0m',
      'Что-то не так',
      err
    );
  }
}

  try {
    payload = jwt.verify(token, NODE_ENV === "production" ? JWT_SECRET : "secret-key");
  } catch (err) {
    throw new UnauthorizedError("Необходима авторизация");
  }

  req.user = payload;

  return next();
};
