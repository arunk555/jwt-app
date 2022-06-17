const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

/*server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});*/

const servertest = server.listen(process.env.PORT || 5000, () => {
  const port = servertest.address().port;
  console.log(`Express is working on port ${port}`);
});
