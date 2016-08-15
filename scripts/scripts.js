$(function() {
    $('a.smooth').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href);
        var position = target.get(0).offsetTop;
        $(".mdl-layout__content").animate({ scrollTop: position }, speed, "swing");
    });
});

function changePic(imgName) {
    console.log(imgName);
    $('#changing-img').attr('background-image', '"url(images/screenshots/" + imgName + ".png)"');
}
