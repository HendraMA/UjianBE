const router = require('express').Router()
const db = require('../database')

router.get('/allData' , (req,res) => {
    var sql = `select nama, tahun, description 
    from movies;`
    db.query(sql , (err,result) => {
        res.send(result)
    })
})

router.get('/pclassData' , (req,res) => {
    var sql = `select description from movies group by description order by description`
    db.query(sql , (err,result) => {
        res.send(result)
    })
})


module.exports = router