var express = require("express");
var router = express.Router();
var Room = require("../models/roomModel");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const fs = require("file-system");
const multer = require("multer");
// const { upload } = require("../middleawe/upload");

const path = "../public/images"; // Đường dẫn tới thư mục cần kiểm tra

fs.access(path, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`${path} không tồn tại hoặc không có quyền ghi`);
  } else {
    console.log(`${path} tồn tại và có quyền ghi`);
  }
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function(req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Vui lòng chọn File hình ảnh trước khi thêm phòng" });
    }
    const { roomname, namehotel, description, price, acreage } = req.body;
    const imagePath = req.file.filename;
    const newRoom = await Room.create({
      roomname,
      namehotel,
      description,
      price,
      acreage,
      image: imagePath,
    });

    res.status(201).json({result: "Thêm phòng thành công"});
  } catch (error) {
    console.log("Error adding room:", error);
    res.status(500).json({ error: "Thêm phòng thất bại" });
  }
});

router.put("/:roomId", upload.single("image"), async (req, res) => {
  const roomId = req.params.roomId;
  const { roomname, namehotel, description, price, acreage } = req.body;
  const imagePath = req.file.filename;

  try {
    if (!req.file) {
      return res.status(400).json({ error: "Vui lòng chọn file trước khi cập nhật" });
    }
    const updateRoom = await Room.update(
      {
        roomname,
        namehotel,
        description,
        price,
        acreage,
        image: imagePath,
      },
      {
        where: {
          id: roomId,
        },
      }
    );

    res.json(updateRoom);

  } catch (error) {
    console.error("Error updating room", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi cập nhật phòng" });
  }
});

router.get("/", async (req, res) => {
  try {
    const listRoom = await Room.findAll();

    res.json(listRoom);
  } catch (error) {
    console.error("Error fetching Rooms:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:roomId", async (req, res) => {
  const roomId = req.params.roomId;
  try {
    await Room.destroy({
      where: {
        id: roomId,
      },
    });
    res.json({ result: "Xóa phòng thành công" });
  } catch (err) {
    console.error("Error deleting room", err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const roomById = await Room.findByPk(id);

    res.json(roomById);
  } catch {
    console.error("Error fetching Rooms:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/countroom', async(req, res ) => {
  try {
    const { count, rows } = await Room.findAndCountAll({});
    res.json({ count, rows });
  } catch (error) {
    console.error('Error finding and counting rooms:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router;
