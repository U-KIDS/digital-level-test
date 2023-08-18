import { Link } from 'react-router-dom';
import './main.css';
import startButton from '../images/StartButton.png';

export default function Main() {
    initSessionStorage();

    return (
        <div className='main-container'>
            <div className='main-title'/>
            <div className='main-loading'/>
            <Link to={`/test/1`}>
                <img src={startButton} alt="startButton" className="main-start"></img>
            </Link>
        </div>
    )
}

function initSessionStorage() {
    sessionStorage.clear();
    sessionStorage.setItem("level", 0);
}