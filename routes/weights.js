const { weight } = require('../models/weight');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const WeightList = await weight.find();

    if (!WeightList) {
        res.status(500).json({ success: false });
    }
    res.status(200).send(WeightList);
});

module.exports = router;
