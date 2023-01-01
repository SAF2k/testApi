const asyncHandler = require("express-async-handler");

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get is Working` });
});

const setUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: `Post is Working` });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update is Working id:${req.params.id}` });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete is Working id:${req.params.id}` });
});

module.exports = { getUser, setUser, updateUser, deleteUser };
