// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();


});

// paralax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    // certificate
    if (wScroll > $('.certificate').offset().top - 250) {
        $('.certificate .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.certificate .thumbnail').eq(i).addClass('muncul');
            }, 200 * (i + 1));
        });


    }

});