var CUR_PAGE = 1;

$(function() {
    HandlebarsIntl.registerWith(Handlebars);
    loadProducts();
});

$('#btnMore').on('click', function() {
    loadProducts();
});

var loadProducts = function() {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:80/products?page=' + CUR_PAGE,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.products);
        $('#product-list').append(html);

        $('#product-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};

var loadCategory = function() {
    $('.loadCate').show();

    $.ajax({
        url: 'http://localhost:80/products?page=' + CUR_PAGE,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.products);
        $('#product-list').append(html);

        $('#product-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};