
const recordScreen = document.getElementById('record-screen')

let recorder;
let recordedChunks = [];

const onRecordStart = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            recordScreen.srcObject = stream
            startRecording(recordScreen.captureStream())
        })
}

const startRecording = (stream) => {
    recorder = new MediaRecorder(stream)
    recorder.ondataavailable = (e) => {
        recordedChunks.push(e.data)
        recorder.start()
    }
}