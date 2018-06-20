$(function () {
	XacNhan();
    if (sessionStorage.getItem('user') === null) {
        window.location.href = './index.html';
    }
});

$('#btnAdDM').on('click', function () {
    var text = $('#TENDM').val();
    var bodys = {
        TENDM: text
    };
    $.ajax({
        url: 'http://localhost:500/danhmuc/',
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(bodys)
    }).done(function(data) {
        window.location.href = './danhmuc.html';
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

var XacNhan = function() {
    $.ajax({
        url: 'http://localhost:500/danhmuc/',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        $.each(data, function(idx, item) {
            var tr = '<tr>' +
                '<td>' +
                item.ID +
                '</td>' +
                '<form><td>' +
                '<input type="text" id="tendm" value="' + item.TENDM + '"/>' +
                '</td>' +
                '<td>' +
                '<button data-id="' + item.ID + '" class="upButton" type="button">SỬA</button>' +
                '</td></form>' +
                '<td>' +
                '<button data-id="' + item.ID + '" class="delButton" type="button">XÓA</button>' +
                '</td>' +
            '</tr>';
            $('#listb').append(tr);
        });
    });
};

$('#listb').on('click', '.delButton', function() {
    var tr = $(this).closest('tr');

    var _id = $(this).data('id');
    var msg = 'Do you want to remove this danhmuc (id: ' + _id + ')';
    var rs = confirm(msg);
    if (rs === true) {
        $.ajax({
            url: 'http://localhost:500/danhmuc/' + _id,
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

$('#listb').on('click', '.upButton', function() {
    var tr = $(this).closest('tr');
    var text = $('#tendm').val();
    var _id = $(this).data('id');
    var msg = 'Do you want to update this danhmuc (id: ' + _id + ')';
    var rs = confirm(msg);
    if (rs === true) {
    	var bodys = {
        	TENDM: text
    	};
    	
    	$.ajax({
	        url: 'http://localhost:500/danhmuc/' + _id,
	        dataType: 'json',
	        timeout: 10000,
	        type: 'POST',
	        contentType: 'application/json',
	        data: JSON.stringify(bodys)
	    }).done(function(data) {
	        window.location.href = './danhmuc.html';
	    }).fail(function(xhr, textStatus, error) {
	        console.log(textStatus);
	        console.log(error);
	        console.log(xhr);
	    });
    }
});