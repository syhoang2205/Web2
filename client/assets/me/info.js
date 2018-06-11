$(function () {
    LoadTK();
});

var LoadTK = function () {
    var mail = sessionStorage.getItem('mail');
    $.ajax({
        url: 'http://localhost:500/taikhoan/' + mail,
        dataType: 'json',
        timeout: 10000
    }).done(function (data) {
        $.each(data, function(idx, item) {
            $('#hoten').append(item.HOTEN);
        }
    });
};