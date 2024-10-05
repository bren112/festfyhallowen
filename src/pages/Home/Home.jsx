import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import banner from './banner.jpeg';

function Home() {
    return (
        <>
            <div className="marquee">
                <h1>HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | HALLOWEN DA DIRETORIA!! | NÃO PERCA 🕷️🕸️🎃 | </h1>
            </div>
            <br />
            <div className="container">
                <div className="esq">
                    <h1>HALLOWEN DA <br /><span>DIRETORIA!</span></h1>
                    <Link to="/sobre">
                        <button>Saiba Mais!</button>
                    </Link>
                </div>

                <br />

                <div className="dir">
                    <img src={banner} alt="Banner" />
                    <Link to="">
                        <button>ESGOTADO</button>
                    </Link>
                </div>
            </div>
            <br />
        </>
    );
}

export default Home;
