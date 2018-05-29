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
            UID: {
                required: true
            },
            PWD: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            ConfirmPWD: {
                required: true,
                equalTo: $('#txtPassword')
            },
            FullName: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
            DOB: {
                required: true,
                vndate: true
            },
        },
        messages: {
            UID: {
                required: 'Please input UID'
            },
            PWD: {
                required: "Chưa nhập mật khẩu.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
            },
            ConfirmPWD: {
                required: "Chưa nhập lại mật khẩu.",
                equalTo: "Mật khẩu nhập lại không khớp."
            },
            FullName: {
                required: "Chưa nhập họ tên.",
            },
            Email: {
                required: "Chưa nhập email.",
                email: "Email không đúng định dạng."
            },
            DOB: {
                required: "Chưa nhập ngày sinh.",
                vndate: 'FAILED'
            },
        },

        highlight: function(element) { // hightlight error inputs
            $(element)
                .closest('.form-group')
                .addClass('has-error'); // set error class to the control group
        },

        success: function(label) {
            // var name = label.attr('for');
            // $('[name=' + name + ']').closest('.form-group').removeClass('has-error');

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
        // var captcha_response = grecaptcha.getResponse();
        // console.log(captcha_response);

        var body = {
            captcha_response: grecaptcha.getResponse()
        };

        $.ajax({
            url: 'http://localhost:3000/users/captcha',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(data) {
            // console.log(data);
            if (data.success) {
                swal("Good job!", "You clicked the button!", "success");
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
        // swal("Good job!", "You clicked the button!", "error");
    }
});