$(function () {
    if (sessionStorage.getItem('user') !== "null") {
    	if (sessionStorage.getItem('user') !== "undefined") {
    		$("#DK").remove();
    		$("#DN").remove();
             document.getElementById("page").href="indexs.html";
    	} else {
    		$("#DG").remove();
    	}
    } else {
        $("#DG").remove();
    }
    if (sessionStorage.getItem('DONGHO' + GetURLParameter("id")) === "KETTHUC") {
        document.getElementById("btndaugia").disabled = true;
        document.getElementById("btnmua").disabled = true;
    }
    if (sessionStorage.getItem('BAN' + GetURLParameter("id")) === "ROI") {
        document.getElementById("btndaugia").disabled = true;
        document.getElementById("btnmua").disabled = true;
    }
	loadProduct();
	loadtb();
});

$('#btndaugia').on('click', function () {
    var id = GetURLParameter("id");
    var gia = 0;
    if (sessionStorage.getItem('user') === "null") {
        alert("Please Login!");
    } else {
        $.ajax({
            url: 'http://localhost:500/sanpham/tien/' + id,
            dataType: 'json',
            timeout: 10000,
        }).done(function(data) {
            $.each(data, function(idx, item) {
                gia = gia + item.GIAKHOIDIEM + item.BUOCNHAY;

                var body = {
                    MASP: id,
                    GIA: gia,
                    MATK: sessionStorage.getItem('id')
                };

                $.ajax({
                    url: 'http://localhost:500/daugia/',
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(body)
                }).done(function(data) {
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                });

                var bodys = {
                    ID: id,
                    GIAKHOIDIEM: gia
                };

                $.ajax({
                    url: 'http://localhost:500/sanpham/' + id,
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(bodys)
                }).done(function(data) {
                    alert("OK");
                    window.location.href = './product.html?id=' + id;
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                });

            });
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
    }
});

$('#btnmua').on('click', function () {
    var id = GetURLParameter("id");
    var gia = 0;
    if (sessionStorage.getItem('user') === "null") {
        alert("Please Login!");
    } else {
        $.ajax({
            url: 'http://localhost:500/sanpham/tien/' + id,
            dataType: 'json',
            timeout: 10000,
        }).done(function(data) {
            $.each(data, function(idx, item) {
                gia = gia + item.GIABAN;

                var body = {
                    MASP: id,
                    GIA: gia,
                    MATK: sessionStorage.getItem('id')
                };

                $.ajax({
                    url: 'http://localhost:500/ketquadg/',
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(body)
                }).done(function(data) {
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                });
            });
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
    }
});

var loadProduct = function () {
    var dm = GetURLParameter("id");

    $.ajax({
        url: 'http://localhost:500/sanpham/' + dm,
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham); 
        $('#product-list').append(html);
        
        $('#product-list div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
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