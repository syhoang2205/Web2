$(function () {
	XacNhan();
    if (sessionStorage.getItem('user') === null) {
        window.location.href = './index.html';
    }
});

var XacNhan = function() {
    $.ajax({
        url: 'http://localhost:500/taikhoan/',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<tr>' +
                '<td>' +
                item.ID +
                '</td>' +
                '<td>' +
                item.HOTEN +
                '</td>' +
                '<td>' +
                item.MAIL +
                '</td>' +
                '<td>' +
                item.DIACHI +
                '</td>' +
                '<td>' +
                item.createdAt +
                '</td>' +
                '<td>' +
                '<button data-id="' + item.ID + '" class="delButton" type="button">Delete</button>' +
                '</td>' +
            '</tr>';
            $('#list').append(tr);
        });
    });
};

$('#list').on('click', '.delButton', function() {
    var tr = $(this).closest('tr');

    var _id = $(this).data('id');
    var msg = 'Do you want to remove this Account (id: ' + _id + ')';
    var rs = confirm(msg);
    if (rs === true) {
        $.ajax({
            url: 'http://localhost:500/taikhoan/' + _id,
            dataType: 'json',
            timeout: 10000,
            type: 'DELETE',
        }).done(function(data) {
            tr.remove();
        }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
        });
    }
});