const express = require('express');
const app = express();
app.use(express.json());

pets = [
    { id: 1, name: 'Rex', type: 'Dog', age: 5 },
    { id: 2, name: 'Whiskers', type: 'Cat', age: 3 },
    { id: 3, name: 'Bubbles', type: 'Fish', age: 1 }
];


app.get('/pets', (req, res) => {
    res.json(pets);
});

app.post('/pets', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.status(201).send();
});

app.put('/pets/:id', (req, res) => {
    const id = req.params.id;
    const pet = req.body;
    pets[id] = pet;
    res.status(200).send();
});

app.delete('/pets/:id', (req, res) => {
    const id = req.params.id;
    pets.splice(id, 1);
    res.status(200).send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
