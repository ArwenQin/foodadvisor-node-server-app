import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name: String,
    likes: Number,
    liked: Boolean,
    disliked: Boolean,
    dislikes: Number,
    time: String,
    title: String,
    topic: String,
    image: String,
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    restaurantType: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    username:String
}, { collection: 'tuits' });

schema.index({ userId: 1, restaurantId: 1 }, { unique: true });

export default schema;
