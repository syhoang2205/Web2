$('#btnLogin').on('click', function() {
    var _MAIL = $('#txtEmail').val();
    var _PASS = $('#txtPassword').val();
    var dataToPost = {
        "MAIL": _MAIL,
        "PASSWORD": _PASS
    };
    var jsonToPost = JSON.stringify(dataToPost);

    $.ajax({
        url: 'http://localhost:500/taikhoan/Login',
        type: 'POST',
        dataType: 'json',
        timeout: 10000,
        contentType: 'application/json',
        data: jsonToPost
    }).done(function(data) {
        if (data === "Success") {
            swal("Đăng Nhập Thành Công.", "You clicked the button!", "success")
            .then(() => {
                window.location.href = './indexs.html';
            });
            
            $.ajax({
                url: 'http://localhost:500/taikhoan/' + _MAIL,
                dataType: 'json',
                timeout: 10000
            }).done(function(data) {
                $.each(data, function(idx, item) {
                    sessionStorage.setItem('id', item.ID);
                    sessionStorage.setItem('user', item.HOTEN);
                    sessionStorage.setItem('mail', item.MAIL);
                    sessionStorage.setItem('diachi', item.DIACHI);
                });
            });
        } else {
            swal("Sai Tài Khoản Hoặc Mật Khẩu.", "You clicked the button!", "error");
        }
    }).fail(function(xhr, status, err) {
        console.log(err);
    });
});