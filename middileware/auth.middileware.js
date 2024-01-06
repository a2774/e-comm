const jwt = require("jsonwebtoken");
const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const payload = jwt.verify(token, "C7766321BB4EBB18");
    req.userID = payload.userID;
    console.log(payload);
  } catch (err) {
    console.log(err);
    return res.status(401).send("Unauthorized");
  }

  next();
};

module.exports = jwtAuth;
