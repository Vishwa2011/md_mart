/*=====================
    Delivery Option Hide & Show js
   ==========================*/
   $(document).ready(function () {
$(".show-box-checked").click(function () {
    $(".future-box").addClass("show");
});
$(".hide-check-box").click(function () {
    $(".future-box").removeClass("show");
});
});