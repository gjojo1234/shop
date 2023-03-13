import User from "../models/User.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("users do not exist");
  }

  const isCorrectPassword = await user.comparePassword(password);
  if (!isCorrectPassword) {
    console.log("password error");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    user,
    token,
  });
};
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("please provide all values");
  }

  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    throw new Error("email is already exist");
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(201).json({
    user: {
      name: user.name,
      email: user.email,
    },
    token,
  });
};

export { loginUser, registerUser };
