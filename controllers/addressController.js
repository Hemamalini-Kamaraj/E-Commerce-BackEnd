const addressModel = require("../models/AddressModel");
const userModel = require("../models/userModel");

const addressController = {
  getuserShippingAddress: async (req, res) => {
    try {
      const userId = req.userId;

      const userAddress = await addressModel.findById(userId, {});
      res.json(userAddress);
    } catch (error) {
      console.error("Error getting user address", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  userShippingAddress: async (req, res) => {
    try {
      const userId = req.userId;
      const { recipientName, addressLine1, city, state, country, zipCode } =
        req.body;

      const newAddress = new addressModel({
        recipientName,
        addressLine1,
        city,
        state,
        country,
        zipCode,
        user: req.userId,
      });

      const address = await newAddress.save();
      const user = await userModel.findById(userId);
      user.address = user.address.concat(address._id);
      await user.save();

      res.status(201).json({
        message: "Address added successfully.",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = addressController;
