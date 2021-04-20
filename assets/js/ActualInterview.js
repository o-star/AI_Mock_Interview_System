import { visionList, companyInterestList, personalityList, valueList, creativityList } from './QuestionList.js'

let timer = document.getElementById('timer')
let problemContents = document.getElementById('problem-contents')
let recordScreen = document.getElementById('record-screen')
let viewScreen = document.getElementById('view-screen')
let playBtn = document.getElementById('play-btn')
let ansFinBtn = document.getElementById('ans-fin-btn')
let reRecordBtn = document.getElementById('re-record-btn')
let nextBtn = document.getElementById('next-btn')
let interviewFinBtn = document.getElementById('interview-fin-btn')

let readytime = 30, answertime = 90; // 준비시간 30초, 답변시간 90초
let recorder
let recordedChunks = []
let recordInterval
let timerCount = readytime

//problem random setting
let categorynum = Math.floor(Math.random() * (6 - 1)) + 1; //category random select
let selectlist;
switch (categorynum) {
    case 1:
        selectlist = visionList;
        break;
    case 2:
        selectlist = companyInterestList;
        break;
    case 3:
        selectlist = personalityList;
        break;
    case 4:
        selectlist = valueList;
        break;
    default:
        selectlist = creativityList;

}

let problemnum = Math.floor(Math.random() * (selectlist.length - 0)) + 0;
//problem index random select

problemContents.innerHTML = selectlist[problemnum];

let readyTimer = setInterval(() => {
    timer.innerHTML = timerCount--
    if (timerCount == 0) {
        clearInterval(readyTimer)
        timer.style.animation = 'none';
        timer.innerHTML = 'Answer Time'
        recordScreen.style.display = 'inline';
        ansFinBtn.style.display = 'inline';
        recordStart();
    }
}, 1000);

const recordStart = () => {
    recordedChunks = [];

    setTimeout(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                recordScreen.srcObject = stream
                startRecording(recordScreen.captureStream())
                timerCount = answertime;
                timer.style.animation = 'timerAni 1s 1s infinite ease-in';
                recordScreen.style.display = 'inline';
                ansFinBtn.style.display = 'inline';
                viewScreen.style.display = 'none';
                playBtn.style.display = 'none';
                reRecordBtn.style.display = 'none';
                nextBtn.style.display = 'none';
                interviewFinBtn.style.display = 'none';
                recordInterval = setInterval(() => {
                    timer.innerHTML = timerCount--;
                    if (timerCount == 0) {
                        recordStop()
                    }
                }, 1000)
            })
    }, 1000)
}

const recordStop = () => {
    stopRecording();
    clearInterval(recordInterval)
    timer.style.animation = 'none';
    timer.innerHTML = 'Finish'
    recordScreen.style.display = 'none';
    ansFinBtn.style.display = 'none';
    viewScreen.style.display = 'inline';
    playBtn.style.display = 'inline';
    reRecordBtn.style.display = 'inline';
    nextBtn.style.display = 'inline';
    interviewFinBtn.style.display = 'inline';
}

const startRecording = (stream) => {
    recorder = new MediaRecorder(stream)
    recorder.ondataavailable = (e) => { recordedChunks.push(e.data) }
    recorder.start()
}

const stopRecording = () => {
    recordScreen.srcObject.getTracks().forEach(track => track.stop());
    //video stop

    recorder.stop()
    //record stop
}

const playRecording = () => {
    const recordedBlob = new Blob(recordedChunks, { type: "video/webm" })

    viewScreen.src = URL.createObjectURL(recordedBlob);
    viewScreen.play()
}

$('#play-btn').click(() => {
    playRecording();
})

$('#ans-fin-btn').click(() => {
    recordStop();
})

$('#re-record-btn').click(() => {
    recordStart();
})

$('#next-btn').click(() => {
    location.href = './ActualInterview.html'
})

$('#interview-fin-btn').click(() => {
    location.href = './index.html'
})