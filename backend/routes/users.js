const { celebrate, Joi, CelebrateError } = require("celebrate");
const { isUrl } = require("validator");
const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  patchUser,
  patchAvatar,
  getUserInfo,
} = require("../controllers/users");

router.get("/users", getAllUsers);
router.get("/users/me", getUserInfo);
router.get("/users/:userId", celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex(),
  }),
}), getUserById);
router.patch("/users/me", celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), patchUser);
router.patch("/users/me/avatar", celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom((value) => {
      if (!isUrl(value)) {
        throw new CelebrateError("Не корректная ссылка");
      }
      return value;
    }),
  }),
}), patchAvatar);

module.exports = router;
