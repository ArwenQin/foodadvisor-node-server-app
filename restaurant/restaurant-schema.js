import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,

        trim: true,
default:"Hi Panda",
        maxlength: [40, 'A restaurant name must have fewer or equal to 40 characters'],
        minlength: [1, 'A restaurant name must have more or equal to 1 characters']
    },
    address: {
        type: String,
        default:"Pandalia",

    },
    cuisine: {
        type: String,
        default:"Bamboo Set",

    },
    image: {
        type: String,
        default: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-%281%29-template-b9bd726f6bee3380567f1c9b63a8c99b_screen.jpg?ts=1658842438'
    },
    imageBanner: {
        type: String,
        default: 'https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg'
    },
    image1: {
        type: String,
        default: 'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg'
    },
    image2: {
        type: String,
        default: 'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-tandoori-spiced-cauliflower-chicken-flatbreads-6422fa89eb35f.jpg?crop=1.00xw:0.501xh;0,0.485xh&resize=1200:*'
    },
    image3: {
        type: String,
        default: 'https://static01.nyt.com/images/2021/08/19/dining/24-easy-quick-dinner-recipes-1632175796332/24-easy-quick-dinner-recipes-1632175796332-superJumbo.jpg'
    },
    description: {
        type: String,
        trim: true,
        default:"What's for pandas?"
    },
    details: {
        type: String,
        trim: true,
        default:"We are a family-owned restaurant serving authentic French cuisine. We are located in the heart of downtown Montreal, and we are open for lunch and dinner every day. We also offer catering services for special events."
    },
    hour: {
        type: String,
        trim: true,
        default:"10am - 10pm, Mon to Sun"
    },
    tel: {
        type: String,
        trim: true,
        default:"102 345 7896"
    },
    menu1: {
        type: String,
        trim: true,
        default:"Escargots de Bourgogne: Burgundy snails in garlic and parsley butter, served with crusty baguette."
    },
    menu2: {
        type: String,
        trim: true,
        default:"Sarma: Grape leaves stuffed with a flavorful mixture of rice, ground meat, and spices."
    },
    menu3: {
        type: String,
        trim: true,
        default:"Baklava: A rich, sweet pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey."
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
