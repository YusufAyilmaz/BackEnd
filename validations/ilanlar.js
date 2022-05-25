const Joi = require("joi");

const objectValidate = Joi.object({
  ilanbaslik: Joi.string().required(),
  ilanfoto: Joi.string(),
  ilanmetni: Joi.string(),
  ilanfiyat: Joi.number(),
});

const idValidate = Joi.object({
    //özel karakterkere izin verilmemesi alphanum()
  id: Joi.string().required().alphanum()
});


module.exports = {
    objectValidate,
    idValidate
}