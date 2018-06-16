var CUR_PAGE = 1;
var CUR_PAGEs = 1;
var CUR_PAGE_Search = 1;
var CPSearchDM = 1;
$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    if(GetURLParameter("idm") === undefined) {
        $('#btnsearch').on('click', function () {
            loadSearch();
        }, loadProducts());
    } else {
    	$('#btnsearch').on('click', function () {
            loadSearchDM();
        }, loadProduct());
    }
    loadDM();
});

$('#btnMore').on('click', function () {
    loadProducts();
});

var loadProducts = function () {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:500/sanpham?page=' + CUR_PAGEs,
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

        CUR_PAGEs++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};

var loadProduct = function () {
    $('.loader').show();

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