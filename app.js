const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('hello')
})

// * Port
const port = 3000;
app.listen(port, () => {
    console.log(`port başlatıldı... server: ${port} `)
})