document.getElementById('calculatorForm').onsubmit = function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('/calculate', {
        method: 'POST',
        body: new URLSearchParams(formData)
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').textContent = data.result;
        })
        .catch(() => alert('Error calculating'));
};