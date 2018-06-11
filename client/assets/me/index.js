var CUR_PAGE = 1;

$(function () {
    HandlebarsIntl.registerWith(Handlebars);
    loadProducts();
    loadDM();
});
$('#btnMore').on('click', function () {
    loadProducts();
});

var loadProducts = function () {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:500/sanpham?page=' + CUR_PAGE,
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

var loadDM = function () {
    $.ajax({
        url: 'http://localhost:500/danhmuc',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<div class="list-group"> <a href="?idm=' + item.ID + '" class="list-group-item">' + item.TENDM + '</a>' + '</div>';
            $('#list').append(tr);
        });
    });
};