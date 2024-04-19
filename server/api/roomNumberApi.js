var express = require('express');
var router = express.Router();
const RoomNumber = require('../models/roomNumberModel');
const { where } = require('sequelize');

router.post('/', async(req, res) => {
    const numberOfRoomsToAdd = req.body.quantity
    const idRoom = req.body.idRoom
    try{

        for(var index = 1 ; index <= numberOfRoomsToAdd ; index++) {
            let addRoomNumber = await RoomNumber.create({
                roomNumber: idRoom + "0" +index,
                status: false,
                idRoom: idRoom 
            })
        }
        res.status(201).json({result: "Add Roomnumer Successfull"})
    }catch(err) {
        res.status(500).json({error: err})
    }
})

router.get('/' , async(req, res) => {
    try{
        const listRoomNumberByIdRoom = await RoomNumber.findAll( )

        res.status(201).json(listRoomNumberByIdRoom)
    }catch(err) {
        res.status(500).json({error: err})
    }
})

router.get('/:id' , async(req, res) => {
    const id = req.params.id
    try{
        const OneRoomNumber = await RoomNumber.findAll({
            where: {
                id: id
            }
        })
        res.status(201).json(OneRoomNumber)
    }catch(err) {
        res.status(500).json({error: err})
    }
})

router.get('/listRoomNumberByIdRoom/:idRoom' , async(req, res) => {
    const idRoom = req.params.idRoom
    try{
        const listRoomNumberByIdRoom = await RoomNumber.findAll({
            where: {
                idRoom : idRoom,
                status: false
            }
        })

        res.status(201).json(listRoomNumberByIdRoom)
    }catch(err) {
        res.status(500).json({error: err})
    }
})

router.put('/updateStatusRoomNumber/:id', async(req, res) => {
    const id = req.params.id 
    try{ 
        const changeStatus = await RoomNumber.update({status: true}, {
            where: {
                id: id
            }
        })
        res.status(201).json({result: "Confirm successful room number selection"})
    }catch(err) {
        res.status(500).json({error: err})
    }
})

module.exports = router;
