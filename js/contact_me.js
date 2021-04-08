$(function () {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour

            // get values from FORM
            var name = $("#Nombre").val();
            var email = $("#email-3").val();
            var phone = $("#field-3").val();
            var message = $("#field-4").val();
            var firstName = name;

            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            $.ajax({
                url: "/mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function (data) {
                    // Success message
                    /*$('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Su mensaje ha sido enviado. En breve nos pondremos en contacto, muchas gracias. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');						
                    	
                    //clear all fields
                    $('#contactForm').trigger("reset");*/
                    window.location = 'gracias.html';
                },
                error: function () {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Lo sentimos, parece que el  servidor de correo no está respondiendo. Por favor, inténtelo de nuevo más tarde.");
                    $('#success > .alert-danger').append('</div>');
                },
            })
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
