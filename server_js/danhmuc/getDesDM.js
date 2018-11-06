const express = require('express')
const router = express.Router()

router.get('/:id', function(req, res, next) {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('not able to get connection ' + err)
      res.status(400).send(err)
    }

    const id = req.params.id

    client.query("SELECT * FROM tb_danhmuc where dm_idcha = '" + id + "'", function(err, result) {
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
