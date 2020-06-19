import express from 'express';
import data from './services/data';
const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

const PORT = process.ENV.PORT || 5000;

app.listen(PORT, ()=>{console.log("Server started!")})