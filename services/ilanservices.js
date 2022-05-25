const ilan = require("../models/ilan.js");

const insert = (ilanData) => {
  const yeniBilgi = new ilan(ilanData);
  return yeniBilgi.save();
};
const update = (Duzenlenenilan) => {
  const guncelilan = {
    ilanbaslik: Duzenlenenilan.ilanbaslik,
    ilanfoto: Duzenlenenilan.ilanfoto,
    ilanmetni: Duzenlenenilan.ilanmetni,
    ilanfiyat: Duzenlenenilan.ilanfiyat
  };

  return ilan.findByIdAndUpdate(Duzenlenenilan.id, guncelilan);
};

const remove = (silinecekilan) => {
  return ilan.findByIdAndDelete(silinecekilan.id);
};

const list = () => {
  return ilan.find({});
};

module.exports = {
  insert,
  update,
  remove,
  list
};
