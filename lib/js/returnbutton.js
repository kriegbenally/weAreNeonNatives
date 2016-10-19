// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('.fa-cloud-upload').fadeIn(200);    // Fade in the arrow
    } else {
        $('.fa-cloud-upload').fadeOut(200);   // Else fade out the arrow
    }
});
