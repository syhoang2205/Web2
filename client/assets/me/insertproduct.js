$(function () {
	loadDM();
});

var loadDM = function () {
    $.ajax({
        url: 'http://localhost:500/danhmuc',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<button data-id="' + item.ID + '" class="idButton" type="button">' + item.TENDM + '</button>';
            $('#list').append(tr);
        });
    });
};

$('#list').on('click', '.idButton', function() {
    var _id = $(this).data('id');
    sessionStorage.setItem('IDDM', _id);
});

$('#btnAddSanPham').on('click', function() {
	var input = document.getElementById('file');
	var _NGUOIBAN = sessionStorage.getItem('id');
    var _TENSP = $('#txtTenSP').val();
    var _MADM = sessionStorage.getItem('IDDM');
    var _GIAKHOIDIEM = $('#txtGiaKD').val();
    var _GIABAN = $('#txtGiaB').val();
    var _BUOCNHAY = $('#txtBuocN').val();
    var _MOTA = $('#txtMota').val();
    var _HINH = input.files[0].name;

    var bodys = {
        NGUOIBAN: _NGUOIBAN,
        TENSP: _TENSP,
        MADM: _MADM,
        GIAKHOIDIEM: _GIAKHOIDIEM,
        GIABAN: _GIABAN,
        BUOCNHAY: _BUOCNHAY,
        MOTA: _MOTA,
        HINH: _HINH
    };

    $.ajax({
        url: 'http://localhost:500/sanpham/',
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(bodys)
    }).done(function(data) {
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});