const mongoose = require('mongoose');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const details = require('./details');

mongoose.connect('mongodb://localhost:27017/YelpCamp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '5feb48d159d54604c247abfd',
            location: `${details[random1000].city}, ${details[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    details[random1000].longitude,
                    details[random1000].latitude,
                ]
            },
            images: 
             [ 
                 { 
                   url: 'https://res.cloudinary.com/study-purp/image/upload/v1609507888/YelpCamp/nabpaaaxarv1vi3gysqh.jpg',
                filename: 'YelpCamp/nabpaaaxarv1vi3gysqh' },
              {
                url: 'https://res.cloudinary.com/study-purp/image/upload/v1609507892/YelpCamp/wbvgnqt0stzjcwdmu0uo.jpg',
                filename: 'YelpCamp/wbvgnqt0stzjcwdmu0uo' } 
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})