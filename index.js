const app = require('express')()
const port = 7000
const movie = require('./router/movie')
const cors = require('cors')


app.use(cors())
app.get('/' , (req,res) => {
    res.send('<h1> Selamat Datang di API Movie </h1>')
})

app.use('/movie' , require('./router/movie'))


app.listen(port, () => console.log('Server Aktif di Port ' + port))