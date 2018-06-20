$(function () {
    XacNhan();
});

var XacNhan = function() {
    $.ajax({
        url: 'http://localhost:500/trangchu/store/' + sessionStorage.getItem('id'),
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
                item.NGUOIBAN +
                '</td>' +
                '<td>' +
                item.GIAKHOIDIEM +
                '</td>' +
                '<td>' +
                '<button data-id="' + item.ID + '" class="delButton" type="button">Delete</button>' +
                '</td>' +
            '</tr>';
            $('#listb').append(tr);
        });
    });
};

$('#listb').on('click', '.delButton', function() {
    var tr = $(this).closest('tr');

    var _id = $(this).data('id');
    var msg = 'Do you want to remove this product (id: ' + _id + ')';
    var rs = confirm(msg);
    if (rs === true) {
        $.ajax({
            url: 'http://localhost:500/ketquadg/' + _id,
            dataType: 'json',
            timeout: 10000,
            type: 'DELETE',
        }).done(function(data) {
            tr.remove();
        }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
        });
        sessionStorage.setItem('BAN' + _id, null);
    }
});