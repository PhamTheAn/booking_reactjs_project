var express = require('express');
var router = express.Router();
var app = express()
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel");
const Role = require("../models/roleModel")
const bcrypt = require("bcrypt");
const notifier = require('node-notifier');

router.use(bodyParser.json())

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing username or password' });
    }
    const user = await User.findOne({
        where: {
            username: username
        },
        include: Role,
    })

    const generateToken = (user, role) => {
        const payload = {
            user: {
                id : user.id,
                username: user.username,
                email: user.email,
                roles: user.roles[0]
            },
        };
        return jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });
    } 

    console.log(user);
    if(!user) {
        console.log("Tài khoản không tồn tại")
        res.status(401).json({ error: 'Tài khoản không tồn tại' });
    }else if(username == user.username) {
        const result = await bcrypt.compare(password, user.password)
        if(result) {
            const result = "Đăng nhập thành công"
            const token = generateToken(user, user.roles)
            res.json({token, result})
        }else {
            res.status(401).json({error:"Mật khẩu không chính xác"});
        }
    }
    
})




module.exports = router