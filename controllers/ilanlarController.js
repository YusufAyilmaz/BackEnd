const { insert, remove, update, list } = require("../services/ilanservices.js");

const ilanEkle = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Veriler uygun değil..." });
    });
  };
  const ilanDuzenle = (req, res) => {
    update(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Düzeltme yapılamadı." });
    });
  };
  
  const ilanAl = (req, res) => {
    list()
    .then((response) => {
      res.json({ resData: response, status: 200 });
    })
    .catch((err) => {
      res
      .status(500)
      .send({ resData: "Kayıtlar alınamadı." });
    });
  };
  
  const ilanSil = (req, res) => {
    remove(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ resData: "Silinme işlemi Başarısız." });
    });
};

module.exports = {
  ilanEkle,
  ilanDuzenle,
  ilanSil,
  ilanAl
};
