$(window).on("load", function () {
  "use strict";

  /* ========================================================== */
  /*   Hide Responsive Navigation On-Click                      */
  /* ========================================================== */

  $(".navbar-nav li a").on("click", function (event) {
    $(".navbar-collapse").collapse("hide");
  });

  /* ========================================================== */
  /*   Navigation Color                                         */
  /* ========================================================== */

  $("#navbarCollapse").onePageNav({
    filter: ":not(.external)",
  });

  /* ========================================================== */
  /*   SmoothScroll                                             */
  /* ========================================================== */

  $(".navbar-nav li a, a.scrool").on("click", function (e) {
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top;

    $("html,body").animate({ scrollTop: target_top - 70 }, 1000);
    return false;
  });

  /* ========================================================== */
  /*   Newsletter                                               */
  /* ========================================================== */

  $(".newsletter-form").each(function () {
    var form = $(this);
    //form.validate();
    form.submit(function (e) {
      if (!e.isDefaultPrevented()) {
        jQuery.post(
          this.action,
          {
            email: $('input[name="nf_email"]').val(),
          },
          function (data) {
            form.fadeOut("fast", function () {
              $(this).siblings("p.newsletter_success_box").show();
            });
          }
        );
        e.preventDefault();
      }
    });
  });

  /* ========================================================== */
  /*   Register                                                 */
  /* ========================================================== */

  $('#sendMail').on('click', function (){
	var email = $('#email').val().trim();
	var names = $('#names').val().trim();
	var phone = $('#phone').val().trim();

	$.ajax({
		url: 'php/contact.php',
		type: 'POST',
		cache: false,
		data: {'name': names, 'email': email, 'phone': phone},
		dataType: 'html',
		success: function(data){
			form.fadeOut("fast", function () {
			$(this).siblings("p.register_success_box").show();
		}
	});
  });

  /* ========================================================== */
  /*   Contact                                                  */
  /* ========================================================== */
  $("#contact-form").each(function () {
    var form = $(this);
    //form.validate();
    form.submit(function (e) {
      if (!e.isDefaultPrevented()) {
        jQuery.post(
          this.action,
          {
            names: $('input[name="contact_names"]').val(),
            email: $('input[name="contact_email"]').val(),
            message: $('textarea[name="contact_message"]').val(),
          },
          function (data) {
            form.fadeOut("fast", function () {
              $(this).siblings("p").show();
            });
          }
        );
        e.preventDefault();
      }
    });
  });
});

/* ========================================================== */
/*   Popup-Gallery                                            */
/* ========================================================== */
$(".popup-gallery")
  .find("a.popup1")
  .magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

$(".popup-gallery")
  .find("a.popup2")
  .magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

$(".popup-gallery")
  .find("a.popup3")
  .magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

$(".popup-gallery")
  .find("a.popup4")
  .magnificPopup({
    type: "iframe",
    gallery: {
      enabled: false,
    },
  });
