
import "./intro.scss"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, 
            { showCursor: true, 
                backDelay: 1500,
                backspeed: 60,
                strings: ['Developer', 'Designer', 'Educator' ] })
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photo-nb.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Welcome!</h1>
                    <h2>I'm Greg D'Amato</h2>
                    <h3>Full Stack <span ref={ textRef }></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownwardIcon className="icon"/>
                </a>
            </div>
        </div>
    )
}
