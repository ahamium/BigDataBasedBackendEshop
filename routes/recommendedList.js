const { recommendedList } = require('../models/recommendedList');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

router.get(`/`, async (req, res) => {
    const recommendedLists = await recommendedList.find().limit(50);

    if (!recommendedLists) {
        res.status(500).json({ success: false });
    }
    res.send(recommendedLists);
});

router.get(`/:id`, async (req, res) => {
    const recommendedLists = await recommendedList.findById(req.params.id);

    if (!recommendedLists) {
        res.status(500).json({ success: false });
    }
    res.send(recommendedLists);
});

module.exports = router;
