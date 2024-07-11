// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;
// server.js (continued)
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));

app.use(express.urlencoded());
app.use(cors())
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
