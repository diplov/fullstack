const express = require("express");
const {
  addUser,
  verifyEmail,
  forgetPassword,
  resetpassword,
  signin,
  signout,
  resendverification,
  finduser,
  finduserbyemail,
  userlists,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", addUser);
router.get("/conform/:token", verifyEmail);
router.post("/resetpassword", forgetPassword);
router.post("/resetpassword/:token", resetpassword);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/finduser/:id", finduser);
router.get("/finduserbyemail", finduserbyemail);
router.get("/userlist", userlists);
router.post("/resendverification", resendverification);

module.exports = router;
