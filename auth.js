const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ensureAuthorization = (req, res) => {
  try {
    let receivedJWT = req.headers["authorization"];

    if (receivedJWT) {
      let decodedJwt = jwt.verify(receivedJWT, process.env.PRIVATE_KEY);
    } else {
      throw new ReferenceError("JWT must be provided");
    }
    return decodedJwt;
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    return err;
  }
};

module.exports = ensureAuthorization;
