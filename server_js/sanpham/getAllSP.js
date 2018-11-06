const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('not able to get connection ' + err)
      res.status(400).send(err)
    }
    client.query('SELECT *  FROM tb_sanpham', function(err, result) {
      done() // closing the connection;
      if (err) {
        console.log(err)
        res.status(400).send(err)
      }
      res.status(200).send(result.rows)
    })
  })
})

module.exports = router
