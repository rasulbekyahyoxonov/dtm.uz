$('document').ready(function () {
    $('.bars-ico').click(function () {
        $('.infoUl').slideToggle(300);
    });
    $('.infoLi').click(function () {
        $('.dropdown-menyu').slideToggle(200);
    })
    // $('.search-Li').click(function () {
    //     $('.search-ico').css('opacity', '0');
    //     $('.close-ico').css('opacity', '1');
    //     $('.search_div').show(200);
    // })
    // $('.close-ico').click(function () {
    //     $('.search-ico').css('opacity', '1');
    //     $('.close-ico').css('opacity', '0');
    //     $('.search_div').hide(200);
    // })
    document.querySelector('.search-ico').addEventListener('click', function () {
        $(this).css('opacity', '0');
        $('.close-ico').css('opacity', '1');
        $('.search_div').show();
    })
    document.querySelector('.close-ico').addEventListener('click', function () {
        $(this).css('opacity', '0');
        $('.search-ico').css('opacity', '1');
        $('.search_div').hide();
    })
})