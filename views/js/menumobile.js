$('.fa-close').hide();
$(".btn-open-menu-mobile").click(function (e) {
    if (e.target == this) {
        $(".menu-mobile").show();
        $('.fa-bars').hide();
        $('.fa-close').show();
    }
});
$(".btn-close-menu-mobile").click(function (e) {
    if (e.target == this) {
        $(".menu-mobile").hide();
        $('.fa-bars').show();
        $('.fa-close').hide();
    }
});