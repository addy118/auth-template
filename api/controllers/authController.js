require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../prisma/queries/User");
const { JWT_SECRET } = process.env;

exports.postSignup = async (req, res) => {
  const { name, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create(name, username, email, hashedPassword);

  res.status(200).json({ user });
};

exports.postLogin = async (req, res) => {
  const { data, password } = req.body;
  const user = await User.get(data);

  if (!user) return res.status(404).send("User not found!");

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return res.status(400).send("Invalid password!");

  // sign token
  const token = jwt.sign({ user }, JWT_SECRET);

  // send set-cookie header with response
  res.cookie("authToken", token, {
    httpOnly: true,
    secure: false,
    samesite: "none",
  });

  res.json({ msg: "Login Successful!" });
  // res.json({ msg: "User logged in!", token });
};

// verify middleware
exports.verifyToken = (req, res, next) => {
  // verify from cookie
  const authCookie = req.cookies.authToken;

  if (!authCookie) {
    return res.status(401).json({ msg: "Unauthorize: No Token Found!" });
  }

  try {
    // console.log(authCookie);
    const token = jwt.verify(authCookie, JWT_SECRET);
    console.log(token);
    req.user = token.user;
    next();
  } catch (error) {
    return res.status(403).json({ msg: "Invalid or expired token" });
  }

  // add token to the request
  // const bearerHeader = req.headers["authorization"];
  // const authToken = bearerHeader && bearerHeader.split(" ")[1];
  // if (!authToken) return res.status(500).send("Unauthorized access!");
  // req.token = authToken;

  // // verify the token and add user to the request obj
  // jwt.verify(req.token, JWT_SECRET, (err, data) => {
  //   if (err) return res.sendStatus(403);
  //   req.user = data.user;
  // });
  // next();
};

exports.verifyOwnership = (req, res, next) => {
  const userId = Number(req.params.userId);
  if (userId !== req.user.id)
    return res.status(403).json({ msg: "You don't have access rights" });

  next();
};
