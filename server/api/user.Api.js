var express = require('express');
var router = express.Router();
const User = require('../models/userModel') 
const Role = require('../models/roleModel')
const bodyParser = require("body-parser");
router.use(bodyParser.json())
const bcrypt = require('bcrypt')
const util = require('util');
const Room = require('../models/roomModel');
// const models = require('../models')
const hashPassword = util.promisify(bcrypt.hash)



router.get('/list', async (req,res) => {
    try{
        const listUser = await User.findAll({ raw: true });
        
        res.json(listUser)
    }catch(error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

router.get('/findAndCount', async(req, res ) => {
    const { count, rows } = await User.findAndCountAll()
    res.json({count, rows})
})

router.get('/', async (req, res) => {
    try {
        const listUserWithRole = await User.findAll({
            include: Role, // Sử dụng tên mô hình Role
        });

        // Lấy thông tin về vai trò của người dùng từ kết quả truy vấn
        const usersWithRoles = listUserWithRole.map(user => {
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                // Lấy thông tin về vai trò (nếu có)
                roles: user.roles.map(role => role.roleName),
            };
        });

        res.json(usersWithRoles);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    try{
        const userById = await User.findByPk(id)
        res.status(201).json(userById)
    }catch(err) {
        res.status(500).json({error: err})
    }
})

router.post('/', async (req, res) => {
    try{

        const newDataUser = req.body
        if(!req.body.username || !req.body.email || !req.body.password) {
            res.status(401).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
        }

        const checkUserName = await User.findAll({
            where: {
                username: newDataUser.username
            }
        })
        const checkEmail = await User.findAll({
            where: {
                email: newDataUser.email
            }
        })

        if(checkUserName.length > 0) {
            res.status(401).json({ error: 'Username already exists, please change it' });
            return;
        }
        if(checkEmail.length > 0) {
            res.status(401).json({ error: 'Email already exists, please change it' });
            return;
        }

        const saltRounds = 10;
        const OldPassword = newDataUser.password;

        console.log("data: ",newDataUser);
        const customerRole = await Role.findByPk(2)
        console.log("customerRole: ", customerRole.dataValues.id);
        
        const newPassword = await hashPassword(OldPassword, saltRounds)

        const newUser = await User.create({
            username: newDataUser.username,
            email: newDataUser.email,
            password: newPassword,
        })

    
        await newUser.addRole(customerRole.dataValues.id);
        res.status(201).json({result: 'Đăng ký tài khoản thành công, vui lòng chuyển đến trang đăng nhập' });
    }catch(error) {
        console.error('Error registering user:', error);
        res.status(500).json({error: error});
    }
})

router.delete('/:userId', async(req, res) => {
    const userId = req.params.userId;
    try {
        await User.destroy({
            where: {
                id: userId
            },
        });
        res.json({result: "Xóa người dùng thành công"})
    }catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
}
)

module.exports = router;