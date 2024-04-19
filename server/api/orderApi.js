var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
var Order = require('../models/orderModel')
var OrderDetail = require('../models/orderDetailModel')

router.post('/', async(req, res) => {
    const dataOrder = req.body;
    console.log("data order: ",dataOrder);
    console.log("id user: ",dataOrder.idUser);
    console.log("id room: ",dataOrder.idRoom);

    try{
        if(!req.body) {
            return res.status(400).json({ error: "Lỗi không tìm thấy dữ liệu" });
        }
        const createOrder = await Order.create({
            idUser: dataOrder.idUser,
            idRoom: dataOrder.idRoom,
        })
        const idOrder = createOrder.id
        const lastPrice = parseFloat(dataOrder.price) * parseInt(dataOrder.quantityDateOrder)
        
        const createOrderDetail = await OrderDetail.create({
            userName: dataOrder.userName,
            userPhoneNumber: dataOrder.userPhoneNumber,
            roomName: dataOrder.roomName,
            checkInDate: dataOrder.checkInDate,
            checkOutDate: dataOrder.checkOutDate,
            price: lastPrice,
            note: dataOrder.note,
            paymentStatus: dataOrder.paymentStatus,
            idOrder: idOrder,
        })

        res.status(201).json({result: "Đặt phòng thành công"});
    }catch(error) {
        console.log("Error Booking room:", error);
        res.status(500).json({ error: "Đặt phòng thất bại" });
    }


})

router.get('/', async(req, res) => {
    const dataOrder = await Order.findAll()

    res.status(200).json(dataOrder)
})
router.get('/:idUser', async(req, res) => {
    const idUser = req.params.idUser
    try{
        const dataOrderByIdUser = await Order.findAll({
            where: {
                idUser: idUser
            }
        })
        res.status(200).json(dataOrderByIdUser)
    }catch(err) {
        res.status(500).json({error: err})
    }
})

router.get('/orderdetail', async(req, res) => {
    const dataOrderDetail = await OrderDetail.findAll()

    res.status(200).json(dataOrderDetail)
})

router.post('/findAndCount', async(req, res ) => {
    const { count, rows } = await Order.findAndCountAll()
    res.json({count, rows})
})
router.get('/orderdetail/:idOrder', async(req, res ) => {
    const idOrder = req.params.idOrder
    try{
        if(!idOrder) {
            return res.status(404).json({error:"Không tìm thấy ID"})
        }
        const orderDetailById = await OrderDetail.findAll({
            where: {
                idOrder: idOrder
            }
        })
        res.json(orderDetailById)
    }catch(err){
        res.json(err)

    }
})

router.get('/orderdetailbyusername/:userName', async(req,res) => {
    const userName = req.params.userName
    try{
        if(!userName) {
            return res.status(404).json({error:"Không tìm thấy ID"})
        }
        const orderDetailByUsername = await OrderDetail.findAll({
            where: {
                userName: userName
            }
        })
        res.json(orderDetailByUsername)
    }catch(err){
        res.json(err)

    }
})

router.put('/updateRoomNumberInOrderDetail/:id', async(req, res) => {
    const id = req.params.id
    const roomNumber = req.body.roomNumber
    console.log(id);
    console.log(roomNumber);
    try{
        const updateRoomNumber = await OrderDetail.update({roomNumber: roomNumber}, {
            where: {
                id: id
            }
        })

        res.status(201).json({result: "update room number successfull"})
    }catch(err) {
        res.status(500).json({error: err})
    }
})

module.exports = router;