const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');


dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log(`MongoDB Connected`)).catch(err => console.log(err))

app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));

