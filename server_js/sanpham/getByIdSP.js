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
    client.query(
      "SELECT * FROM tb_sanpham left join tb_chitietsp on tb_sanpham.sp_id= tb_chitietsp.sp_id where tb_sanpham.sp_id = '" +
        id +
        "'",
      function(err, result) {
        done()
        if (err) {
          console.log(err)
          res.status(400).send(err)
        }
        res.status(200).send(result.rows)
      }
    )
  })
})
module.exports = router
