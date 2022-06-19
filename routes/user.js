const express = require("express");
const router = express.Router();
//const auth = require("../middleware/auth");
const {registerctrl, loginctrl, welcomectrl} = require("../controllers/user");

router.post("/register", registerctrl);
router.post("/login", loginctrl);



module.exports=router;