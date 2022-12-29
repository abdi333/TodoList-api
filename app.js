const express = require('express');
const app = express();
const port = 3001;

let list = ["list 1", "list 2", "list 3"]

app.use(express.json());

app.get('/list', (req, res) => {
    res.json(list)
})

app.post('/list', (req, res) => {
    list.push(req.body);
    res.send('posted')
})

app.put('/list', (req, res) => {
    res.json(list)
})

app.delete('/list', (req, res) => {
    res.json(list)
})


app.listen(port, () => {
  console.log(`App is ready on port 3001`)
}) 