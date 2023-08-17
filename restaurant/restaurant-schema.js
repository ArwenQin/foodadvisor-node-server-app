import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A restaurant must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A restaurant name must have fewer or equal to 40 characters'],
        minlength: [1, 'A restaurant name must have more or equal to 1 characters']
    },
    address: {
        type: String,
        required: [true, 'A restaurant must have an address']
    },
    cuisine: {
        type: String,
        required: [true, 'A restaurant must specify its cuisine type']
    },
    image: {
        type: String,
        default: 'default-restaurant.jpg'
    },
    description: {
        type: String,
        trim: true
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val * 10) / 10 // round to nearest 0.1
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    }
});

export default restaurantSchema;
