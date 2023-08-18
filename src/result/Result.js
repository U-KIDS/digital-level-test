import './result.css';
import { Link } from 'react-router-dom';
import resultList from './resultList';
import React from 'react';

export default function Result() {

    let final_level = Math.floor(parseInt(sessionStorage.getItem("level")) / 2) + 1;
    console.log(final_level)
    let result = resultList.find((result) => result.level===final_level)

    return (
        <div className='result-container'>
            <div className='result-div'>
                <div className='result-title-div'>
                    <span className='result-title-span'>{result.title}</span>
                </div>
                <div className='result-content-div'>
                    <span className='result-content-span'>{result.content}</span>
                </div>
            </div>
            <Link to={`/`}>
                <span className='retry-span'>다시하기</span>
            </Link>
        </div>
    )
}