const { Router } = require("express");
const {
  postSignup,
  postLogin,
} = require("../controllers/authController");
const { validateReq } = require("../config/validation/req");
const { validateSignup, validateLogin } = require("../config/validation/user");
const authRouter = Router();

authRouter.post("/signup", [validateSignup, validateReq, postSignup]);

authRouter.post("/login", [validateLogin, validateReq, postLogin]);

authRouter.use((err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.send("Something broke in auth routes!");
});

module.exports = authRouter;
