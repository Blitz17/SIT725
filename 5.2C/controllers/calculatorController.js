const { calculate } = require('../models/calculatorModel');

let history = [];

const handleCalculation = (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operation = req.body.operation;

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ result: 'Invalid input' });
    }

    const result = calculate(num1, num2, operation);

    const record = { num1, num2, operation, result };
    history.push(record);

    res.json({ result });
};

const getHistory = (req, res) => {
    res.json({ history });
};

const clearHistory = (req, res) => {
    history = [];
    res.json({ message: 'History cleared' });
};

module.exports = { handleCalculation, getHistory, clearHistory };