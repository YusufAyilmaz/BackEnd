const app = require("./app");
const { ilanlarRoutes } = require("./api-routes");
const app_port = process.env.APP_PORT || 3002;
// const cors = require("cors");

app.use(ilanlarRoutes);

app.listen(app_port, () => {
  //3002 portundan gelen istekler
  console.log(`${process.env.APP_PORT} portu dinleniyor...`);
});
