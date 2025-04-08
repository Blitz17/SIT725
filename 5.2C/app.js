const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { handleCalculation } = require('./controllers/calculatorcontroller');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'calculator.html'));
});

app.post('/calculate', handleCalculation);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});