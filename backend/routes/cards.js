const { celebrate, Joi } = require("celebrate");
const router = require("express").Router();
const {
  getAllCards,
  deleteCard,
  createCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");

router.get("/cards", getAllCards);
router.delete("/cards/:cardId", celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), deleteCard);
router.post("/cards", celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().validate({
      validator(link) {
        // eslint-disable-next-line no-useless-escape
        return /^(https?):\/\/[w]*\.?[\w-]*\.[a-z]+[\/\w^\w#-]*/.test(link);
      },
      message: "Некорректная ссылка на картинку",
    }),
  }),
}), createCard);
router.put("/cards/:cardId/likes", celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), likeCard);
router.delete("/cards/:cardId/likes", celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), dislikeCard);

module.exports = router;
