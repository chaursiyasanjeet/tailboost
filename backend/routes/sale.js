const router = require("express").Router();
const Sale = require("../models/sale");

router.get("/salesData", async (req, res, next) => {
  try {
    const allSales = await Sale.find();

    res.status(200).json({
      status: "SUCCESS",
      message: "data fetched successfully",
      sales: allSales,
    });
    return;
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
