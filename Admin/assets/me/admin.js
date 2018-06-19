$(function () {
	XacNhan();
});

var XacNhan = function() {
    $.ajax({
        url: 'http://localhost:500/sanpham/XacNhan',
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
                '<button data-id="' + item.ID + '" class="addButton" type="button">Yes</button>' +
                '</td>' +
                '<td>' +
                '<button data-id="' + item.ID + '" class="delButton" type="button">No</button>' +
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
            url: 'http://localhost:500/sanpham/' + _id,
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

$('#listb').on('click', '.addButton', function() {
    var tr = $(this).closest('tr');

    var _id = $(this).data('id');
    var msg = 'Do you want to Add this product (id: ' + _id + ')';
    var rs = confirm(msg);
    if (rs === true) {
    	$.ajax({
            url: 'http://localhost:500/sanpham/XacNhan/' + _id,
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
        }).done(function(data) {
            tr.remove();
        }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
        });
    }
});