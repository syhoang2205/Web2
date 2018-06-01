$('#btnLogin').on('click', function() {
    var dataToPost = {
        user: 'nndkhoa',
        pwd: '123456'
    };
    var jsonToPost = JSON.stringify(dataToPost);

    $.ajax({
        url: 'http://localhost:500/login',
        type: 'POST',
        dataType: 'json',
        timeout: 10000,
        contentType: 'application/json',
        data: jsonToPost
    }).done(function(data) {
        if (data.success) {
            swal("Đăng Nhập Thành Công.", "You clicked the button!", "success");
        } else {
            swal("Sai Tài Khoản Hoặc Mật Khẩu.", "You clicked the button!", "error");
        }
    }).fail(function(xhr, status, err) {
        console.log(err);
    });
});