$(document).ready(function() {
  xGetDMcha()
  xGetDMtab()
  xGetDMfooter()

  $('#loadspSM').on('click', function() {
    alert($(location).attr('href'))
    // xGetSPByIDDM(id)
  })
})

//danh muc cha tren menu chinh
function xGetDMcha() {
  $.ajax({
    type: 'GET',
    url: '/danhmucs',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      xBuildListDM(data)
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
  function xBuildListDM(data) {
    $('.danhmuc').empty()
    var strVar = ''
    strVar += '<li> <a href="index.html" class="hyper "><span>Trang chủ</span></a></li>'
    for (var j = 0; j < data.length; j++) {
      var iDM_ID = data[j].dm_id
      var strDM_Ten = data[j].dm_ten
      strVar += '<li class="dropdown">'
      strVar +=
        '<a class="dropdown-toggle hyper" data-toggle="dropdown" href="danhmuc' +
        iDM_ID +
        '.html"><span>' +
        strDM_Ten +
        '<b class="caret"></b></span></a>'
      strVar += '<ul class="dropdown-menu" id="danhmuccon' + iDM_ID + '" style="left:0%"></ul>'
      strVar += '											</li>'
      getDMdes(iDM_ID)
    }
    $('.danhmuc').append(strVar)
  }
}

//danh muc con
function getDMdes(id) {
  $.ajax({
    type: 'GET',
    url: '/danhmucbyId/' + id,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      builDMDes(data, id)
    },
    failure: function(response) {
      var data = response.d
      console.log(data)
    },
    error: function(response) {
      var data = response.d
      console.log(data)
    }
  })
  function builDMDes(data, id) {
    $('#danhmuccon' + id).empty()
    var strVar = ''
    for (var j = 0; j < data.length; j++) {
      var iDM_ID = data[j].dm_id
      var strDM_Ten = data[j].dm_ten
      var strDM_ma = data[j].dm_ma
      strVar +=
        '<li ><a href="danhmuc' +
        id +
        '.html#' +
        iDM_ID +
        '" style="float:left" onclick="xGetSPByIDDM(' +
        iDM_ID +
        ')"><i class="fa fa-angle-right"></i>' +
        strDM_Ten +
        '</a></li>'
    }
    $('#danhmuccon' + id).append(strVar)
  }
}

//danh muc cha phia duoi hien thi san pham theo tab
function xGetDMtab() {
  $.ajax({
    type: 'GET',
    url: '/danhmucs',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      xBuildListDM(data, '#danhmucnho')
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
  function xBuildListDM(data, danhmucnho) {
    $(danhmucnho).empty()
    var strVar = ''
    for (var j = 0; j < data.length; j++) {
      var iDM_ID = data[j].dm_id
      var strDM_Ten = data[j].dm_ten
      var strDM_ma = data[j].dm_ma
      xGetSPinDMtab(iDM_ID, 4)

      if (j === 0) {
        strVar +=
          '<li class="active"><a href="#' +
          iDM_ID +
          '" data-toggle="tab">' +
          strDM_Ten +
          '</a></li>'
      } else {
        strVar +=
          '<li class=""><a href="#' + iDM_ID + '" data-toggle="tab">' + strDM_Ten + '</a></li>'
      }
    }
    $(danhmucnho).append(strVar)
  }
}

//hien thi san pham tren cac tab theo danh muc cha
function xGetSPinDMtab(id, length) {
  $.ajax({
    type: 'GET',
    url: '/sanphamsbyIdDanhmuc/' + id,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      xBuildListDM(data, '#sanphamDM', id, length)
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
  function xBuildListDM(data, sanphamDM, id, length) {
    var strVar = ''
    var len
    if (length > data.length) {
      len = data.length
    } else {
      len = length
    }
    if (id === 1) {
      strVar = '<div class="tab-pane active text-style" id="' + id + '">'
    } else {
      strVar = '<div class="tab-pane text-style" id="' + id + '">'
    }
    strVar += '						<div class=" con-w3l">'
    for (var j = 0; j < len; j++) {
      var iSP_ID = data[j].sp_id
      var strSP_TenSanPham = data[j].sp_ten
      var strSP_LinkAnh = data[j].sp_hinhanh
      xGetSPbyID(iSP_ID)
      strVar += '<div class="col-md-3 m-wthree">'
      strVar += '								<div class="col-m">'
      strVar += '									<a href="#myModal' + iSP_ID + '" data-toggle="modal" class="offer-img" id="demo">'
      strVar += '										<img src="' + strSP_LinkAnh + '" class="img-responsive" alt="">'
      strVar += '										<div class="offer">'
      strVar += '											<p><span>Offer</span></p>'
      strVar += '										</div>'
      strVar += '									</a>'
      strVar += '									<div class="mid-1">'
      strVar += '										<div class="women">'
      strVar += '											<h5>' + strSP_TenSanPham + '</h5>'
      strVar += '										</div>'
      strVar += '										<div class="mid-2">'
      strVar += '											<label>Liên hệ: 0985.810.399</label>'
      strVar += '											<div class="block">'
      strVar += '												<div class="starbox small ghosting"> </div>'
      strVar += '											</div>'
      strVar += '											<div class="clearfix"></div>'
      strVar += '										</div>'
      strVar += ''
      strVar += '									</div>'
      strVar += '								</div>'
      strVar += '							</div>'
    }
    strVar += '						</div>'
    strVar += '					</div>'
    $(sanphamDM).append(strVar)
  }
}

//danh muc cha o footer
function xGetDMfooter() {
  $.ajax({
    type: 'GET',
    url: '/danhmucs',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      var data = response
      xBuildListDM(data, '#danhmucfooter')
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
  function xBuildListDM(data, danhmucfooter) {
    $(danhmucfooter).empty()
    var strVar = '<li><a href="index.html">Home</a></li>'
    for (var j = 0; j < data.length; j++) {
      var iDM_ID = data[j].dm_id
      var strDM_Ten = data[j].dm_ten
      var strDM_ma = data[j].dm_ma
      xGetSPinDMtab(iDM_ID)
      strVar += '<li class=""><a href="#">' + strDM_Ten + '</a></li>'
    }
    $(danhmucfooter).append(strVar)
  }
}
//hien thi len modal
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
      var iCTSP_xuatxu = data[j].ctsp_xuatxu
      var strCTSP_model = data[j].ctsp_model
      var strCTSP_thongso = data[j].ctsp_thongso
      var strCTSP_kichthuoc = data[j].ctsp_kichthuoc
      var strCTSP_congsuat = data[j].ctsp_congsuat
      var strCTSP_khoiluong = data[j].ctsp_khoiluong
      var strCTSP_dacdiem = data[j].ctsp_dacdiem
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
      strVar += '						<p class="in-para">' + strCTSP_thongso + '</p>'
      strVar += '						<p class="in-para">' + strCTSP_model + '</p>'
      strVar += '						<p class="in-para">' + strCTSP_kichthuoc + '</p>'
      strVar += '						<p class="in-para">' + strCTSP_congsuat + '</p>'
      strVar += '						<p class="in-para">' + strCTSP_khoiluong + '</p>'
      strVar += '					</div>'
      strVar += '					<div>'
      strVar += '						<div class="price_single">'
      strVar += '							<span class="reducedfrom ">Liên hệ: 0985.810.399</span>'
      strVar += '							<div class="clearfix"></div>'
      strVar += '						</div>'
      strVar += '						<h4 class="quick">Mô tả sản phẩm:</h4>'
      strVar += '						<p class="quick_desc">' + strCTSP_dacdiem + '</p>'
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
