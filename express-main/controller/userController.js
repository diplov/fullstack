const User = require("../model/userModel")
const crypto = require("crypto")
const Token = require("../model/TokenModel")
const sendEmail = require('../utils/sendEmail')
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
// register
exports.addUser = async (req, res) => {
    // check email if already exists
    let user = await User.findOne({
        email: req.body.email
    })
    if (user) {
        return res.status(400).json({ error: "Email already exists. please login 0r try different email" })
    }
    // create user 
    let userToAdd = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    // generate token
    let token = new Token({
        token: crypto.randomBytes(24).toString('hex'),
        user: userToAdd._id
    })
    token = await token.save()
    if (!token) {
        return res.status(400).json({ error: "something went wrong" })
    }
    // send token to email
    // const url = `http://localhost:5000/api/conform/${token.token}`
    const url = `${process.env.FRONTEND_SERVER}/conform/${token.token}`

    sendEmail({
        from: "diplovkhatri99@gmail.com",
        to: req.body.email,
        subject: "diplov",
        text: "hello",
        html: `<a href="${url}"><button>verifiy</button></a>`,
    })

    userToAdd = await userToAdd.save()
    if (!userToAdd) {
        return res.status(400).json({
            error: "Somethings went wrong"
        })
    }
    res.send(userToAdd)
    // token generate
    // send token to email
    // add user
}
// email verification
exports.verifyEmail = async (req, res) => {
    // check token
    const token = await Token.findOne({ token: req.params.token })
    if (!token) {
        return res.status(400).json({ error: "Invalid token" })
    }
    // check user
    let user = await User.findById(token.user)
    if (!user) {
        return res.status(400).json({ error: "User not found" })
    }
    // check if already verify
    if (user.isVerified) {
        return res.status(400).json({ error: "User already verified.login to continue" })
    }
    // verify user
    user.isVerified = true
    user = await user.save()
    if (!user) {
        return res.status(400).json({ error: "somethings went wrong" })
    }
    return res.status(200).json({ message: "User verified Successfully.login to continue" })
}
// forget password
exports.forgetPassword = async (req, res) => {
    // check email
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ error: "Email is not register" })
    }
    // generate token
    let token = new Token({
        token: crypto.randomBytes(24).toString('hex'),
        user: user._id
    })
    token = await token.save()
    if (!token) {
        return res.status(400).json({ error: "something went wrong" })
    }
    // send token in email
    // const url = `http://localhost:5000/api/resetpassword/${token.token}`
    const url = `${process.env.FRONTEND_SERVER}/conform/${token.token}`

    sendEmail({
        from: "diplovkhatri99@gmail.com",
        to: req.body.email,
        subject: "reset password",
        text: "click the following link to rest password",
        html: `<a href="${url}"><button>verifiy</button></a>`,
    })
    return res.status(200).json({ message: "Password reset link is send to the email" })
}
// reset password
exports.resetpassword = async (req, res) => {
    // check token
    let token = await Token.findOne({ token: req.params.token })
    if (!token) {
        return res.status(400).json({ error: "Invalid token or token expired" })
    }
    // find user
    let user = await User.findById(token.user)
    if (!user) {
        return res.status(400).json({ error: "user not found" })
    }
    // change passwored
    user.password = req.body.password
    // save password
    user = await user.save()
    if (!user) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    return res.status(200).json({ message: "password has changed " })
}
// sign in process
exports.signin = async (req, res) => {
    // email validation
    // destructring user
    const { email, password } = req.body
    let user = await User.findOne({ email: email })
    if (!user) {
        return res.status(400).json({ error: "User not register" })
    }
    // password check
    if (!user.authenticate(password)) {
        return res.status(400).json({ error: "email and password do not match" })
    }
    // verified check
    if (!user.isVerified) {
        return res.status(400).json({ error: "user not verified.verified to continue" })
    }
    // create login token
    const token = jwt.sign({ user: user._id, role: user.role }, process.env.JWT_SCREAT)
    // set to cookies
    res.cookie('mycookie', token, { expire: Date.now() + 86400 })
    // return info
    const { _id, username, role } = user
    return res.status(200).json({ token, user: { _id, username, role } })
}
// sign out process
exports.signout = async (req, res) => {
    let response = await res.clearCookie('mycookie')
    if (!response) {
        return res.status(400).json({ error: "something went wrong" })
    }
    return res.status(200).json({ message: "log out successfull" })
}
// authorization
exports.reqiuiresignin = expressjwt({
    secret: process.env.JWT_SCREAT,
    algorithms: ['HS256']
})

// resend verification
exports.resendverification = async (req, res) => {
    // check email
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ error: "email not registered" })
    }
    // check if verified  already or not
    if (user.isVerified) {
        return res.status(400).json({ error: 'User already verified' })
    }
    // generate token
    let token = new Token({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')

    })
    token = await token.save()
    if (!token) {
        return res.status(400).json({ error: "Somethings went wrong" })
    }

    // send mail
    // const url = `http://localhost:5000/api/conform/${token.token}`
    const url = `${process.env.FRONTEND_SERVER}/conform/${token.token}`

    sendEmail({
        from: "diplovkhatri99@gmail.com",
        to: req.body.email,
        subject: "diplov",
        text: "hello",
        html: `<a href="${url}"><button>verifiy</button></a>`,
    })
    return res.status(200).json({ message: "Verification link is send to email.please verified" })
}
// search through email
exports.finduserbyemail = async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ error: "User not find" })
    }
    res.send(user)
}
// users details
exports.finduser = async (req, res) => {
    let user = await User.findById(req.params.id)
    if (!user) {
        return res.status(400).json({ error: "User not find" })
    }
    res.send(user)
}
// to get user list
exports.userlists = async (req, res) => {
    let users = await User.find()
    if (!users) {
        return res.status(400).json({ error: "Somethings went wrong" })
    }
    res.send(users)
}
// delete user
const deleteuser = async (req, res) => {
    User.findByIdAndDelete(req.params.id).then(
        (userdelete) => {
            if (!userdelete) {
                return res.status(400).json({ error: "User not found" })
            }
            return res.status(400).json({ error: "User not found" })
        }
    ).catch((error) => {
        return res.status(400).json({ error: "user error" })

    })
}
