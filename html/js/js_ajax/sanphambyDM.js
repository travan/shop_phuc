$(document).ready(function() {
  var url = window.location.hash
  var id = url.split('#')
  xGetSPByIDDM(id[1])
})

function xGetSPByIDDM(id) {
  $.ajax({
    type: 'GET',
    url: '/sanphamsbyIdDanhmucCon/' + id,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
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
      xGetSPbyID(iSP_ID)
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
      strVar += '								<label>Liên hệ: 0985.810.399</label>'
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
  }
}

function xGetSPbyID(id) {
  $.ajax({
    type: 'GET',
    url: '/sanphamsbyId/' + id,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      xBuildListSP1(data, id, '#modalsp')
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
  function xBuildListSP1(data, id, modalsp) {
    var strVar = ''
    strVar +=
      '<div class="modal fade" id="myModal' +
      id +
      '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'
    for (var j = 0; j < data.length; j++) {
      var iSP_ID = data[j].sp_id
      var strSP_TenSanPham = data[j].sp_ten
      var strSP_LinkAnh = data[j].sp_hinhanh
      var strCTSP_xuatxu = data[j].ctsp_xuatxu
      var strCTSP_model = data[j].ctsp_model
      var strCTSP_thongso = data[j].ctsp_thongso
      var strCTSP_kichthuoc = data[j].ctsp_kichthuoc
      var strCTSP_congsuat = data[j].ctsp_congsuat
      var strCTSP_khoiluong = data[j].ctsp_khoiluong
      var strCTSP_dacdiem = data[j].ctsp_dacdiem
      var strCTSP_hangSX = data[j].ctsp_hangsx
      strVar += '		<div class="modal-dialog" role="document">'
      strVar += '			<div class="modal-content modal-info">'
      strVar += '				<div class="modal-header">'
      strVar +=
        '					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
      strVar += '				</div>'
      strVar += '				<div class="modal-body modal-spa">'
      strVar += '					<div class="col-md-7 span-2">'
      strVar += '						<div class="item">'
      strVar += '							<img src="' + strSP_LinkAnh + '" class="img-responsive" alt>'
      strVar += '						</div>'
      strVar += '					</div>'
      strVar += '					<div class="col-md-5 span-1 ">'
      strVar += '						<h3>' + strSP_TenSanPham + '</h3>'
      if (strCTSP_xuatxu !== null) {
        strVar += '						<p class="in-para" id="' + strCTSP_xuatxu + '">' + strCTSP_xuatxu + '</p>'
      }
      if (strCTSP_thongso !== null)
        strVar += '						<p class="in-para" id="' + strCTSP_thongso + '">' + strCTSP_thongso + '</p>'
      if (strCTSP_model !== null)
        strVar += '						<p class="in-para" id="' + strCTSP_model + '">' + strCTSP_model + '</p>'
      if (strCTSP_kichthuoc !== null)
        strVar += '						<p class="in-para" id="' + strCTSP_kichthuoc + '">' + strCTSP_kichthuoc + '</p>'
      if (strCTSP_congsuat !== null)
        strVar += '						<p class="in-para" id="' + strCTSP_congsuat + '">' + strCTSP_congsuat + '</p>'
      if (strCTSP_khoiluong !== null)
        strVar += '						<p class="in-para" id="' + strCTSP_khoiluong + '">' + strCTSP_khoiluong + '</p>'
      if (strCTSP_hangsx !== null)
        strVar += '						<p class="in-para" id="' + strCTSP_hangsx + '">' + strCTSP_hangsx + '</p>'
      strVar += '					</div>'
      strVar += '					<div>'
      strVar += '						<div class="price_single">'
      strVar += '							<span class="reducedfrom ">Liên hệ: 0985.810.399</span>'
      strVar += '							<div class="clearfix"></div>'
      strVar += '						</div>'
      strVar += '						<h4 class="quick">Mô tả sản phẩm:</h4>'
      if (strCTSP_dacdiem !== null) strVar += '						<p class="quick_desc">' + strCTSP_dacdiem + '</p>'
      strVar += '					<div class="clearfix"> </div>'
      strVar += '					</div>'
      strVar += '				</div>'
      strVar += '			</div>'
    }
    strVar += '		</div>'
    strVar += '	</div>'
    $(modalsp).append(strVar)
  }
}
