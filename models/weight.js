const mongoose = require('mongoose');
//var Long = mongoose.Schema.Types.Long;

const weightSchema = mongoose.Schema({
    weightForBrand: mongoose.Schema.Types.Decimal128,
    weightForSeason: mongoose.Schema.Types.Decimal128,
    unixReviewTime: {
        type: Number,
    },
});

weightSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    const { _id: id, ...result } = object;
    return { ...result, id };
});

exports.weight = mongoose.model('weight', weightSchema, 'weight');
