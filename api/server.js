require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const { PORT } = process.env;

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.send("Something broke in server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
