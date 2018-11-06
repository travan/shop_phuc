$(document).ready(function() {
  xGetSP(8, '#sphot')
})

function xGetSP(length, idE) {
  $.ajax({
    type: 'GET',
    url: '/sanphams',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      xBuildListSP1(data, idE, length)
    },
    failure: function(response) {
      var data = response
      console.log(data)
    },
    error: function(response) {
      var data = response
      console.log(data)
    }
  })
  //lấy sanpr phẩm ở dong hot
  function xBuildListSP1(data, idE, length) {
    $(idE).empty()
    var strVar = ''
    for (var j = 0; j < length; j++) {
      var iSP_ID = data[j].sp_id
      var strSP_TenSanPham = data[j].sp_ten
      var strSP_LinkAnh = data[j].sp_hinhanh
      // xGetSPbyID(iSP_ID)
      strVar += '<div class="col-md-3 pro-1">'
      strVar += '					<div class="col-m">'
      strVar += '						<a href="#myModal' + iSP_ID + '" data-toggle="modal" class="offer-img">'
      strVar += '							<img src="' + strSP_LinkAnh + '" class="img-responsive">'
      strVar += '						</a>'
      strVar += '						<div class="mid-1">'
      strVar += '							<div>'
      strVar += '								<h5>' + strSP_TenSanPham + '</h5>'
      strVar += '							</div>'
      strVar += '										<div class="mid-2">'
      strVar += '											<label>Liên hệ: 0985.810.399</label>'
      strVar += '											<div class="block">'
      strVar += '												<div class="starbox small ghosting"> </div>'
      strVar += '											</div>'
      strVar += '								<div class="clearfix"></div>'
      strVar += '							</div>'
      strVar += '						</div>'
      strVar += '					</div>'
      strVar += '				</div>'
    }
    $(idE).append(strVar)
  }
}

function xGetSPByIDDM(id) {
  $.ajax({
    type: 'GET',
    url: '/sanphamsbyIdDanhmucCon/' + id,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      console.log(data)
      xBuildListSP1(data, '#spByDM')
    },
    failure: function(response) {
      var data = response
      console.log(data)
    },
    error: function(response) {
      var data = response
      console.log(data)
    }
  })
  //lấy sanpr phẩm ở dong hot
  function xBuildListSP1(data, spByDM, length) {
    $(spByDM).empty()
    var strVar = ''
    for (var j = 0; j < data.length; j++) {
      var iSP_ID = data[j].sp_id
      var strSP_TenSanPham = data[j].sp_ten
      var strSP_LinkAnh = data[j].sp_hinhanh
      var strVar = ''
      strVar += '<div class="col-md-3 pro-1">'
      strVar += '					<div class="col-m">'
      strVar += '						<a href="#myModal' + iSP_ID + '" data-toggle="modal" class="offer-img">'
      strVar += '							<img src="' + strSP_LinkAnh + '" class="img-responsive" alt="">'
      strVar += '						</a>'
      strVar += '						<div class="mid-1">'
      strVar += '							<div class="women">'
      strVar += '								<h6><a href="#">' + strSP_TenSanPham + '</a></h6>'
      strVar += '							</div>'
      strVar += '							<div class="mid-2">'
      strVar += '								<p><label>$7.00</label><em class="item_price">$6.00</em></p>'
      strVar += '								<div class="block">'
      strVar += '									<div class="starbox small ghosting"> </div>'
      strVar += '								</div>'
      strVar += '								<div class="clearfix"></div>'
      strVar += '							</div>'
      strVar += '						</div>'
      strVar += '					</div>'
      strVar += '				</div>'
    }
    $(spByDM).append(strVar)
    console.log(spByDM)
  }
}
