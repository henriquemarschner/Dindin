const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/gastos', require('./routes/gastos'));
app.use('/chat', require('./routes/ia'));

app.listen(process.env.PORT, () => {
    console.log(Servidor rodando na porta ${process.env.PORT}`);
}