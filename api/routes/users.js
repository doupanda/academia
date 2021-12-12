const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { checkAuth } = require("../middlewares/authentication.js");

//models import
import User from "../models/user.js";

//LOGIN
router.post("/user-login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    var user = await User.findOne({ email: email });


    //if no email
    if (!user) {
      const response = {
        status: "error",
        error: "Credenciales Inválidas"
      };
      return res.status(401).json(response);
    }

    //if email and email ok
    if (bcrypt.compareSync(password, user.password)) {
      user.set("password", undefined, { strict: false });

      const token = jwt.sign({ userData: user }, "aquiUnaClaveSuperSegura", {
        expiresIn: 2592000
      });

      const response = {
        status: "success",
        token: token,
        userData: user
      };

      return res.json(response);

    } else {

      const response = {
        status: "error",
        error: "Credenciales Inválidas"
      };

      return res.status(401).json(response);

    }
  } catch (error) {
    console.log(error);
  }
});

//LOGOUT
router.post("/user-logout", async (req, res) => {
  try {
      console.log("se desloguea usuario")

      const response = {
        status: "success",
        message: "Se desloguea usuario"
      }

      return res.json(response);

  } catch (error) {
    console.log(error);
  }
});

//GET USER
router.get('/user-get', checkAuth, async (req, res) => {

  try {
     
      const userId = req.userData._id;

      var user = await User.findOne({ _id: userId });

      var toSend = {
        userData: user
      }

      return res.json(toSend)

  } catch (error) {

      console.log(error);

      const response = {
          status: "error",
          error: error
      }

      return res.status(500).json(response);

  }

});

////REGISTER
router.post("/user-register", async (req, res) => {
  try {
 
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword,
    };

    const user = await User.create(newUser);

    const response = {
      status: "success"
    };

    res.status(200).json(response);
  } catch (error) {

    console.log(error);

    const response = {
      status: "error",
      error: error
    };

    return res.status(500).json(response);
  }
});




//ELIMINA UN USUARIO
router.delete('/users', checkAuth, async (req, res) => {

  try {

    const storeId = req.userData.storeId;
    const user = req.body.user;

    //borramos la categoría de la base de datos
    await User.deleteOne({ storeId: storeId, _id: user._id });

    return res.json()

  } catch (error) {

    console.log(error);

    const response = {
      status: "error",
      error: error
    }

    return res.status(500).json(response);

  }

});




module.exports = router;