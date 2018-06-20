var CUR_PAGE = 1;
var CUR_PAGEs = 1;
var CUR_PAGE_Search = 1;
var CPSearchDM = 1;

$(function () {
	$("#b0").hide();
    HandlebarsIntl.registerWith(Handlebars);
    if(GetURLParameter("idm") === undefined) {
        $('#btnsearch').on('click', function () {
            loadSearch();
            loadtime();
        }, loadProducts(), loadProduct2(), loadProduct3());
    } else {
    	$('#btnsearch').on('click', function () {
            loadSearchDM();
            loadtime();
        }, loadProduct());
    }
    loadtime();
    loadDM();
});

$('#btnMore').on('click', function () {

});

$('#btnMore').on('click', function () {
    loadProducts();
});

var loadProducts = function () {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:500/trangchu/MIN',
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham); 
        $('#product-list1').append(html);
        
        $('#product-list1 div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });

        $('.loader').hide();
    });
};

var loadProduct2 = function () {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:500/trangchu/SPDGNN',
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        var source = $('#product-template2').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham); 
        $('#product-list2').append(html);
        
        $('#product-list2 div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });

        $('.loader').hide();
    });
};

var loadProduct3 = function () {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:500/trangchu/MAX',
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        var source = $('#product-template3').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham); 
        $('#product-list3').append(html);

        $('#product-list3 div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });

        $('.loader').hide();
    });
};

var loadProduct = function () {
    $('.loader').show();
    $("#b0").show();
	$("#b1").remove();
    $("#b2").remove();
    $("#b3").remove();

    var dm = GetURLParameter("idm");

    $.ajax({
        url: 'http://localhost:500/sanpham/Searchs/' + dm + '?page=' + CUR_PAGE,
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

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};

var loadSearch = function () {
    $('.loader').show();
    $("#b0").show();
    $("#b1").remove();
    $("#b2").remove();
    $("#b3").remove();

    var dm = $('#txtsearch').val();

    $.ajax({
        url: 'http://localhost:500/sanpham/Search/' + dm + '?page=' + CUR_PAGE_Search,
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        $("#product-list").html("");
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham);
        $('#product-list').append(html);

        $('#product-list div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};

var loadSearchDM = function () {
    $('.loader').show();

    var txt = $('#txtsearch').val();
    var dm = GetURLParameter("idm");

    $.ajax({
        url: 'http://localhost:500/sanpham/Search/' + txt + '/' + dm + '?page=' + CPSearchDM,
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        $("#product-list").html("");
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham);
        $('#product-list').append(html);

        $('#product-list div[style]').fadeIn(200, function () {
            $(this).removeAttr('style');
        });

        CPSearchDM++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};

var loadDM = function () {
    $.ajax({
        url: 'http://localhost:500/danhmuc',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<div class="list-group"> <a onclick="loadProduct()" href="?idm=' + item.ID + '" class="list-group-item">' + item.TENDM + '</a>' + '</div>';
            $('#list').append(tr);
        });
    });
};

var loadtime = function () {
    $.ajax({
        url: 'http://localhost:500/trangchu/time',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            timedown(item.ID, item.NGAYKT);
            timedown1(item.ID, item.NGAYKT);
            timedown2(item.ID, item.NGAYKT);
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
function timedown(id, sParam) {
    var name = "demo" + id;
    var namebt = "btndg" + id;
    var countDownDate = new Date(sParam).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(name).innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(namebt).disabled = true;
            document.getElementById(name).innerHTML = "Kết Thúc";
        }
    }, 1000);
}
function timedown1(id, sParam) {
    var name = "demo2" + id;
    var namebt = "btndg2" + id;
    var countDownDate = new Date(sParam).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(name).innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(namebt).disabled = true;
            document.getElementById(name).innerHTML = "Kết Thúc";
        }
    }, 1000);
}
function timedown2(id, sParam) {
    var name = "demo3" + id;
    var namebt = "btndg3" + id;
    var countDownDate = new Date(sParam).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(name).innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById(namebt).disabled = true;
            document.getElementById(name).innerHTML = "Kết Thúc";
        }
    }, 1000);
}