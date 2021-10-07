const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = { create, login, checkToken, update };

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error();
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordMatch) {
      const token = createJWT(user);
      res.json(token);
    } else {
      throw new Error();
    }
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

async function update(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const idx = user.favorites.findIndex(
      (sequence) => sequence.sequenceId === req.body.sequenceId
    );
    if (req.body.method === "add") {
      const newFavorite = { sequenceId: req.body.sequenceId };
      
      newFavorite.options = {
        sequenceName:
          req.body.options && req.body.options.sequenceName
            ? req.body.options.sequenceName
            : req.body.sequenceId,
      };
      if (idx === -1) {
        user.favorites.push(newFavorite);
      } else {
        user.favorites[idx] = newFavorite;
      }
    } else {
      user.favorites.splice(idx, 1);
    }
    await user.save();
    const token = createJWT(user);
    res.json(token);
  } catch {
    res.status(400).json("Favorite Not Saved");
  }
}
