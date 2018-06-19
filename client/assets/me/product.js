$(function () {
    if (sessionStorage.getItem('user') !== "undefined") {
    	if (sessionStorage.getItem('user') !== "null") {
    		$("#DK").remove();
    		$("#DN").remove();
             document.getElementById("page").href="indexs.html";
    	} else {
    		$("#DG").remove();
    	}
    } else {
        $("#DG").remove();
    }

	loadProduct();
	loadtb();
});

var loadProduct = function () {
    var dm = GetURLParameter("id");

    $.ajax({
        url: 'http://localhost:500/sanpham/' + dm,
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        $.each(data, function(idx, item) {
            var tr = 
            '<div class="container-fluid">' +
	            '<div class="row">' +
	                '<div class="col-sm-6 col-md-6">' +
	                    '<img src="http://localhost:500/' + item.HINH + '">' +
	                '</div>' +
	                '<div class="col-sm-6 col-md-6">' +
	                    '<h2>' + item.TENSP +'</h2>' +
	                    '<div>' +
	                        '<label>Giá Mua Ngay: ' + item.GIABAN + ' vnđ </label>' +
	                        '<a href="javascript:;" class="btn btn-danger">' +
	                            '<span class="glyphicon glyphicon-shopping-cart"></span>' +
	                            'Mua Ngay' +
	                        '</a>' +
	                    '</div>' +
	                    '<br>' +
	                    '<div>' +
	                        '<label>Giá Hiện Tại: ' + item.GIAKHOIDIEM + ' vnđ </label>' +
	                        '<a href="javascript:;" class="btn btn-danger">' +
	                            '<span class="glyphicon glyphicon-shopping-cart"></span>' +
	                            'Đấu Giá' +
	                        '</a>' +
	                    '</div>' +
	                    '<br>' +
	                    '<div>' +
	                        '<label>Mô Tả:' + item.MOTA + '</label>' +
	                    '</div>' +
	                '</div>' +
	            '</div>' +
	        '</div>';
            $('#list').append(tr);
        });
    });
};

var loadtb = function () {
	var id = GetURLParameter("id");
    $.ajax({
        url: 'http://localhost:500/daugia/' + id,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<tr>' +
                '<td>' +
                item.NGDG +
                '</td>' +
                '<td>' +
                item.GIA +
                '</td>' +
                '<td>' +
                item.NGAY +
                '</td>' +
            '</tr>';
            $('#listb').append(tr);
        });
    });
};

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}