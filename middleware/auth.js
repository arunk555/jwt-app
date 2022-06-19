const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  //const token = req.body.token || req.query.token || req.params.token || req.headers["x-access-token"];
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJhZWE5MjVmMWVmNTEwMDE2MDY0NzFlIiwiZW1haWwiOiJ0ZXN0dG9rZXd3QGdtYWlsLmNvbSIsImlhdCI6MTY1NTYxNDkwOCwiZXhwIjoxNjU1NjIyMTA4fQ.q8z8ZXAQEmZE2bMUUK-gKAiNKctItKw0eoOv9eTD9aY';
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
