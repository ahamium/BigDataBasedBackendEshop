const mongoose = require('mongoose');

const recommendedListssSchema = mongoose.Schema({
    recommendedList: {
        type: String,
        default: '',
    },
});

recommendedListssSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    const { _id: id, ...result } = object;
    return { ...result, id };
});

exports.recommendedListss = mongoose.model(
    'recommendedListss',
    recommendedListssSchema,
    'recommendedListss'
);
