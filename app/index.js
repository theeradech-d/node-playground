const express = require('express')
const path = require('path')

const app = express()
const port = 4000

app.use(express.static(path.join(__dirname, 'public')));
app.engine('.ejs', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index');
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})