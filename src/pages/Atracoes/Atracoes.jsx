import React, { useEffect, useState } from 'react';
import './Atracoes.css';
import ctc from './ctc.png';
import img from './img.png';

function Atracoes() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 1 : 0));
        }, 100);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="atracoes">
            <br />
            <p id='atracoes'>CTC MOB </p>
            <img src={img} alt="CTC2" />
            <br/>
            <img src={ctc} alt="CTC" />

            <a id='a' href="https://www.instagram.com/cutucumob/" target="_blank" rel="noopener noreferrer" className="link-button">
                Instagram
            </a>
            <br/>
            <br/>
            Jajá Novas Atrações 🤫🤫
            <br/>
            <div className="loading-circle">
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Atracoes;
