const mongoose = require("mongoose");

const ilanSchema = new mongoose.Schema(
  {
    ilanbaslik: { type: String, required: true },
    ilanfoto: { type: String },
    ilanmetni: { type: String },
    ilanfiyat: { type: Number},
  },
  {
    collection: "ilan",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ilanSchema", ilanSchema);
