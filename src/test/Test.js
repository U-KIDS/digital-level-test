import './test.css';
import React from 'react';
import questionList from './questionList';
import { useParams } from 'react-router-dom';

export default function Test() {
    const { id } = useParams();
    const que_id = parseInt(id);
    const question = questionList.find((item) => item.id === que_id);

    function answerButtonHandler(e) {
        let nextQueNum = que_id + 1
        let targetId = e.target.id;
        let level;

        console.log(targetId);
        console.log(question.answer);

        if (targetId === question.answer) {
            level = sessionStorage.getItem("level");
            let afterLevel = parseInt(level) + 1;
            sessionStorage.setItem("level", afterLevel);
        }


        if (nextQueNum === 11) {
            window.location = "/result";
        } else {
            window.location = "/test/" + nextQueNum;
        }
    }

    return (
        <div className='Test-container'>
            <div className='ques-container'>
                <div className='ques-img'>
                    <span className='ques-span'>{question.question}</span>
                </div>
                <div className='button-container'>
                    <button className='box' onClick={answerButtonHandler} id="A" ans = {question.answerA}>
                        <span className='box-tag' id="A">A</span>
                        <span className='box-data' id="A">{question.answerA}</span>
                    </button>
                    <button className='box' onClick={answerButtonHandler} id="B" ans = {question.answerB}>
                        <span className='box-tag' id="B">B</span>
                        <span className='box-data' id="B">{question.answerB}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
