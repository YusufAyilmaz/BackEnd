const express = require("express");
const router = express.Router();
const {
  ilanEkle,
  ilanDuzenle,
  ilanSil,
  ilanAl,
} = require("../controllers/ilanlarController.js");
const Schemas = require("../validations/ilanlar.js");
const { ObjectValidation, IdValidate } = require("../middleware/validations.js");

/** Bütün ilanları alma
 */
router.route(process.env.GET_LISTELE).get(ilanAl);

/** İlan ekleme */
router
  .route(process.env.POST_EKLE)
  .post(ObjectValidation(Schemas.objectValidate), ilanEkle);

/** İlan düzenleme
 * */
router.route(process.env.PUT_DUZENLE).put(
  IdValidate(Schemas.idValidate),
  (req, res, next) => {
    console.log("Düzenle ikinci middleware metodu!! - req \n", req.body);
    next();
  },
  ilanDuzenle
);

/** İlan silme */
router.route(process.env.DELETE_SIL).delete(ilanSil);


/**
 * Test end point leri
 * */
router.get(process.env.GET_TEST, (req, res) => {
  res.status(200).send();
});

module.exports = router;
