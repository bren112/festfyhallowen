import React, { useState } from 'react';
import './Sobre.css';
import banner from './banner.jpeg';
import { Link } from 'react-router-dom'; 


function Sobre() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <br/>
            <div className="container">
                <div className="btnpreto">
                <h1 id='title'>Saiba Mais!</h1>
                <br/>
                <img src={banner} alt="Banner" />
            </div>
            </div>
            <br />
            <p id="title_acordion">Clique Nos Itens e Saiba Mais ⬇️</p>
            <div className="accordion">
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(0)}
                    >
                        🚫 Regras
                    </button>
                    {activeIndex === 0 && (
                        <div className="accordion-content">
                            <p>Ir trajado com tema de halloween maquiagens, fantasias, roupas escuras, da forma que preferirem, desde que se enquadre no tema! Uma dica? Ousem na fantasia! <br/> 

                            <br/> 🗓️ 05/10
                            <br/> 🍻 Bar (+18)
                            <br/> ⏰ 21:00h - ????
                            <br/> 📍(localização exata no dia)
                            <br/> ____________________________________________________________________
                            <br/> 
                            <br/> 📝 QUANTO À LISTA DE CONFIRMADOS:<br/> <br/> 

•Nomes-sem apelidos,<br/>  presença na lista apenas de quem estiver no grupo,<br/>  para manter o controle de público.<br/> Agradecemos!!
</p>
                        </div>
                    )}
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(1)}
                    >
                         🎉 Atrações
                    </button>
                    {activeIndex === 1 && (
                        <div className="accordion-content">
                          <p id="title_acordion">Clique Para Conhecer Nossas Atrações</p>
                        <br/>

                        <div className="btnlaranja">
                    <Link to="/atracoes">
                            <button>Conhecer Atrações</button>
                    </Link>

                        </div>
                        </div>
                    )}
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(2)}
                    >
                        🗺️ Localização
                    </button>
                    {activeIndex === 2 && (
                        <div className="accordion-content">
                            <p id='title_acordion'>Santa Rita do Passa Quatro</p>
                            <div className="map-container">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-47.4908%2C-21.7253%2C-47.4653%2C-21.6952&layer=mapnik"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    title="Mapa de Santa Rita do Passa Quatro"
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
                    <div className="btnpreto">
                    <Link to="/pagamento">

            <button>Eu Quero Ir</button>
            </Link>
                </div>
                <br/>
        </>
    );
}

export default Sobre;
