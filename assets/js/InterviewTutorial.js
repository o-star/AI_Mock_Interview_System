
$(document).ready(() => {

    $('#left-button').click(() => {
        left();
    })

    $('#right-button').click(() => {
        right();
    })

    const left = () => {
        $('#slidebox').animate({
            left: '+=55.7vw'
        })
    }

    const right = () => {
        $('#slidebox').animate({
            left: '-=55.7vw'
        })
    }

})

//참조 사이트
//https://m.blog.naver.com/PostView.nhn?blogId=st004329&logNo=221055679854&proxyReferer=https:%2F%2Fwww.google.com%2F