$(function() {
    // alert('loaded');
    $('#txtCatName').select();
});


$('#btnAdd').on('click', function() {

    var _catName = $('#txtCatName').val();
    if (_catName.length === 0) {
        alert('Please input a valid value');
        return;
    }

    var body = {
        CatName: _catName
    };

    $.ajax({
        url: 'http://localhost:3000/categories',
        dataType: 'json',
        timeout: 10000,

        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(data) {
        // console.log(data);
        alert('Added');
    }).fail(function(xhr, textStatus, error) {
    	console.log(textStatus);
    	console.log(error);
    	console.log(xhr);
    });
});