$(function () {
	XacNhan();
	if (sessionStorage.getItem('user') === null) {
        window.location.href = './index.html';
    }
});

var XacNhan = function() {
    $.ajax({
        url: 'http://localhost:500/sanpham/LoadAll',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<tr>' +
                '<td>' +
                item.ID +
                '</td>' +
                '<td>' +
                item.TENSP +
                '</td>' +
                '<td>' +
                item.NGUOIBAN +
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
                '<td>' +
                item.createdAt +
                '</td>' +
                '<td>' +
                item.updatedAt +
                '</td>' +
            '</tr>';
            $('#list').append(tr);
        });
    });
};