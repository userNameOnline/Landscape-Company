$(document).ready(function() {

    $(window).scroll(function() {
        if(scrollY > 0) {
            $('#reset').css('opacity', '1');
        } else if (scrollY === 0) {
            $('#reset').css('opacity', '0');
        }
    })

    $('#reset').click(function() {
        $(window).scrollTop(0)
    })


    let num = 0;


    setInterval(function() {
        switch(num) {
            case 0: 
                $('#profile').attr('src', "");
                $('#quote').html("")
                $('#author').html("")
                num = 1;
                break;
            case 1:
                $('#profile').attr('src', '');
                $('#quote').html("")
                $('#author').html("")
                num = 2;
                break;
            case 2:
                $('#profile').attr('src', '');
                $('#quote').html("")
                $('#author').html("")
                num = 0;
                break;
        }
    }, 2000)

o

})


