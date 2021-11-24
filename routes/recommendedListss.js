const { recommendedListss } = require('../models/recommendedListss');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

router.get(`/`, async (req, res) => {
    const recommendedLists = await recommendedListss.find();

    if (!recommendedLists) {
        res.status(500).json({ success: false });
    }
    res.send(recommendedLists);
});

module.exports = router;
