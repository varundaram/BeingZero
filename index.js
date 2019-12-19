const express = require('express')
const app = express()
const port =process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/html/index1.html'))
app.get('/index2.html', (req, res) => res.sendFile(__dirname + '/public/html/index2.html'))
app.get('/index3.html', (req, res) => res.sendFile(__dirname + '/public/html/index3.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))