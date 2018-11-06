const express = require('express')
const router = express.Router()

router.get('/:id', function(req, res, next) {
  pool.connect(function(err, client, done) {
    // Handle connection errors
    if (err) {
      console.log(err)
    }

    const id = req.params.id

    // SQL Query > Insert Data
    client.query("SELECT * FROM tb_sanpham where dm_id = '" + id + "'", function(err, result) {
      done()
      if (err) {
        console.log(err)
        res.status(400).send(err)
      }
      res.status(200).send(result.rows)
    })
  })
})
module.exports = router
