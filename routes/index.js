const express = require('express');
const router = express.Router();
const mailer = require("../helpers/mailer")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Mandar datos a la vista
router.post("/", (req, res) => {
  let options = req.body;
  options.filename = "verify"
  mailer.send(options)
    .then(() => {
      res.status(200).send("El correo se mando")
    })
    .catch(err => {
      console.log("Algo salió mal: ", err)
      res.status(500).json({err, "msg":"Algo salio mal"})
    })
})

module.exports = router;