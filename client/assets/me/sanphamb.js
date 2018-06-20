$(function () {
    XacNhan();
});

var XacNhan = function() {
    $.ajax({
        url: 'http://localhost:500/trangchu/buy/' + sessionStorage.getItem('id'),
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<tr>' +
                '<td>' +
                '<img src="http://localhost:500/' + item.HINH + '" alt="Smiley face" width="42" height="42">' +
                '</td>' +
                '<td>' +
                item.TENSP +
                '</td>' +
                '<td>' +
                item.GIABAN +
                '</td>' +
                '<td>' +
                item.GIAKHOIDIEM +
                '</td>' +
                '<td>' +
                item.MOTA +
                '</td>' +
            '</tr>';
            $('#listb').append(tr);
        });
    });
};