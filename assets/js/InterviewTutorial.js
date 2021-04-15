
$(document).ready(() => {
    let slideidx = 1;

    $('#left-button').click(() => {
        left();
    })

    $('#right-button').click(() => {
        right();
    })

    const left = () => {
        if (slideidx > 1) {
            $('#slidebox').animate({
                left: '+=55vw'
            }, 700)
            if (slideidx == 3)
                $('#next-button').css('display', 'none');
            slideidx--;
        }
    }

    const right = () => {
        if (slideidx < 3) {
            $('#slidebox').animate({
                left: '-=55vw'
            }, 700)
            slideidx++;
            if (slideidx == 3)
                $('#next-button').css('display', 'inline');
        }
    }

})