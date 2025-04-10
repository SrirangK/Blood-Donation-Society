const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shrikal19:0srirang%40@cluster0.6u9rrl5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log(`DB connection successful`);
}).catch((e) => {
    console.log(`connection failed` , e.message);
})
