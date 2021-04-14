
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
                left: '+=55.7vw'
            }, 700)
            slideidx--;
        }
    }

    const right = () => {
        if (slideidx < 3) {
            $('#slidebox').animate({
                left: '-=55.7vw'
            }, 700)
            slideidx++;
        }
    }

})

//참조 사이트
//https://m.blog.naver.com/PostView.nhn?blogId=st004329&logNo=221055679854&proxyReferer=https:%2F%2Fwww.google.com%2F