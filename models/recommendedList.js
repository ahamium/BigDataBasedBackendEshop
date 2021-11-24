const mongoose = require('mongoose');

const recommendedListSchema = mongoose.Schema({
    recommended_list: [
        {
            type: String,
        },
    ],
});

recommendedListSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    const { _id: id, ...result } = object;
    return { ...result, id };
});

exports.recommendedList = mongoose.model(
    'recommendedList',
    recommendedListSchema,
    'recommendedList'
);
