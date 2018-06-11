$(function() {

    $('.datepicker').datepicker({
        autoclose: true,
        format: 'd/m/yyyy',
        startDate: '-3d'
    });

    $.validator.addMethod("vndate", function(value, element) {
        return this.optional(element) || /^\d\d?\/\d\d?\/\d\d\d\d$/.test(value);
    });

    $('#registerForm').validate({
        rules: {
            PASSWORD: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            ConfirmPWD: {
                required: true,
                equalTo: $('#txtPassword')
            },
            HOTEN: {
                required: true,
            },
            MAIL: {
                required: true,
                email: true
            },
            DIACHI: {
                required: true,
            },
        },
        messages: {
            PASSWORD: {
                required: "Chưa nhập mật khẩu.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
            },
            ConfirmPWD: {
                required: "Chưa nhập lại mật khẩu.",
                equalTo: "Mật khẩu nhập lại không khớp."
            },
            HOTEN: {
                required: "Chưa nhập họ tên.",
            },
            MAIL: {
                required: "Chưa nhập email.",
                email: "Email không đúng định dạng."
            },
            DIACHI: {
                required: "Chưa nhập địa chỉ.",
            },
        },

        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },

        success: function(label) {

            label.closest('.form-group').removeClass('has-error');
            label.remove();
        },

        errorElement: 'span',
        errorClass: 'help-block'
    });

    $('#txtUserName').select();
});


$('#btnRegister').on('click', function() {

    var isValid = $('#registerForm').valid();
    if (isValid) {

        var body = {
            captcha_response: grecaptcha.getResponse()
        };

        $.ajax({
            url: 'http://localhost:500/taikhoan/captcha',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(data) {
            // console.log(data);
            if (data.success) {
                var _Name = $('#txtName').val();
                var _Mail = $('#txtEmail').val();
                var _PASSWORD = $('#txtPassword').val();
                var _DIACHI = $('#txtAddr').val();

                var bodys = {
                    HOTEN: _Name,
                    MAIL: _Mail,
                    PASSWORD: _PASSWORD,
                    DIACHI: _DIACHI,
                    LOAITK: 2
                };

                $.ajax({
                    url: 'http://localhost:500/taikhoan/',
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(bodys)
                }).done(function(data) {
                	if (data === "Mail owner") {
                		swal("Mail Owner!", "Please Choose Other Mail!", "error");
                	} else {
                		swal("Good job!", "You clicked the button!", "success")
                		.then(() => {
			            	window.location.href = './login.html';
			            });
                	}
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                });

            } else {
                grecaptcha.reset();
                swal("Invalid captcha.", "You clicked the button!", "error");
            }
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
    } else {
        swal("Failed", "You clicked the button!", "error");
    }
});