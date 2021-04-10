import { visionList, companyInterestList, personalityList, valueList, creativityList } from './QuestionList.js'

const questionsection = document.getElementById('question-contents') // 질문리스트 전체 컨텐츠 영역 요소
for (let k = 1; k < 6; k++) {
    let qcategory = document.createElement('div'); //질문 리스트 카테고리 요소
    let qsection = document.createElement('ul'); //질문 카테고리 내부 항목 영역 요소
    let questionlist;

    switch (k) {
        case 1:
            questionlist = visionList;
            qcategory.setAttribute('class', 'question-category visionlist')
            qsection.setAttribute('class', 'question-table visionlist-content')
            qcategory.innerHTML = '비전/목표 질문 리스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼'
            break;
        case 2:
            questionlist = companyInterestList;
            qcategory.setAttribute('class', 'question-category companyinterestlist')
            qsection.setAttribute('class', 'question-table companyinterestlist-content')
            qcategory.innerHTML = '기업 관심도/적합도 질문 리스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼'
            break;
        case 3:
            questionlist = personalityList;
            qcategory.setAttribute('class', 'question-category personalitylist')
            qsection.setAttribute('class', 'question-table personalitylist-content')
            qcategory.innerHTML = '개인별 성격 질문 리스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼'
            break;
        case 4:
            questionlist = valueList;
            qcategory.setAttribute('class', 'question-category valuelist')
            qsection.setAttribute('class', 'question-table valuelist-content')
            qcategory.innerHTML = '가치관 질문 리스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼'
            break;
        case 5:
            questionlist = creativityList;
            qcategory.setAttribute('class', 'question-category creativitylist')
            qsection.setAttribute('class', 'question-table creativitylist-content')
            qcategory.innerHTML = '창의력 질문 리스트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼'
            break;
    }

    for (let t = 0; t < questionlist.length; t++) {
        let question = document.createElement('li')
        question.innerHTML = questionlist[t]
        question.setAttribute('class', 'question-item')
        qsection.appendChild(question)
    }

    questionsection.appendChild(qcategory)
    questionsection.appendChild(qsection)
}

$('.visionlist').click(() => {
    $('.visionlist-content').slideToggle();
    $('.visionlist-content *').slideToggle();
})

$('.companyinterestlist').click(() => {
    $('.companyinterestlist-content').slideToggle();
    $('.companyinterestlist-content *').slideToggle();
})

$('.personalitylist').click(() => {
    $('.personalitylist-content').slideToggle();
    $('.personalitylist-content *').slideToggle();
})

$('.valuelist').click(() => {
    $('.valuelist-content').slideToggle();
    $('.valuelist-content *').slideToggle();
})

$('.creativitylist').click(() => {
    $('.creativitylist-content').slideToggle();
    $('.creativitylist-content *').slideToggle();
})