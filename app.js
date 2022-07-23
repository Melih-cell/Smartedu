const express = require('express');

const app = express();

// * Template Engine
app.set('view engine', 'ejs');

// * Middlewares
app.use(express.static('public'));

// * Routes
app.get('/', (req, res) => {
    res.status(200).render('index', {
        page_name: 'index'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        page_name: 'about'
    })
})

// * Port
const port = 3000;
app.listen(port, () => {
    console.log(`port başlatıldı... server: ${port} `)
})