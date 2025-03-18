//This is a simple calculator API which uses GET and POST commands to do maths. Made by: Dhanush Soma
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let history = [];

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ ERROR: 'Please provide num1 and num2 as query parameters' });
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    const command = { operation: 'add', num1: parseFloat(num1), num2: parseFloat(num2), result: sum };
    history.push(command);
    res.json({ Result: sum });
});

app.get('/history', (req, res) => {
    res.json({ History : history });
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    if (num1 === undefined || num2 === undefined || !operation) {
        return res.status(400).json({ ERROR: 'Please provide num1, num2, and operation in the request body' });
    }
    
    let result;
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;  
    }
    else if (operation === 'multiply') {   
        result = num1 * num2;
    }
    else if (operation === 'divide') {
        if (num2 === 0) return res.status(400).json({ ERROR: 'Cannot divide by zero' });
        result = num1 / num2;
    }
    else {
        return res.status(400).json({ ERROR: 'Invalid operation' });
    }

    const command = { operation, num1, num2, result };
    history.push(command);
    
    res.json({ Result : result });
});

app.delete('/history', (req, res) => {
    history = [];
    res.json({ Message: 'History cleared' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
