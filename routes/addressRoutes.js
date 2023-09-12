const router = require("express").Router();
const addressModel = require("../models/AddressModel");
const addressController = require("../controllers/addressController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  addressModel.find({}, {}).then((address) => {
    res.status(200).json(address);
  });
});

router.get("/", authMiddleware.verifyToken, addressController.getuserShippingAddress);
router.post("/", authMiddleware.verifyToken, addressController.userShippingAddress);

module.exports = router;
