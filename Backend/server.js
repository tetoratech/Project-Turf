const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
