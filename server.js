const express = require('express')
const app = express()

const sanphams = require('./server_js/sanpham/getAllSP')
const sanphambyID = require('./server_js/sanpham/getByIdSP')
const sanphambyIdDanhmuc = require('./server_js/sanpham/getByIdDM')
const sanphambyIdDanhmucCon = require('./server_js/sanpham/getallSPbyIDDMcon')

const danhmuc = require('./server_js/danhmuc/getAllDM')
const danhmucbyID = require('./server_js/danhmuc/getDesDM')

//kết nối database
const pg = require('pg')
const config = {
  user: 'postgres',
  database: 'shop_phuc',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  idleTimeoutMillis: 30000
}
pool = new pg.Pool(config)

app.use(express.static('html'))
app.use(express.static('html/css'))
app.use(express.static('html/fonts'))
app.use(express.static('html/images'))
app.use(express.static('html/js'))

app.use('/sanphams', sanphams)
app.use('/sanphamsbyId', sanphambyID)
app.use('/sanphamsbyIdDanhmuc', sanphambyIdDanhmuc)
app.use('/sanphamsbyIdDanhmucCon', sanphambyIdDanhmucCon)

app.use('/danhmucs', danhmuc)
app.use('/danhmucbyId', danhmucbyID)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(8000)
