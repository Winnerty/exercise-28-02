const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const port = config.get('port');
const dbURI = config.get('dbURI');

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Подключено к MongoDB: ${dbURI}`))
  .catch(err => console.error('Ошибка подключения к MongoDB:', err));

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
