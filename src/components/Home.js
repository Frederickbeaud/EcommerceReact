import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
const Home = () => {
    const url = "./Beautifulheadphone.png";
    return (
        <div>
            <div className='container'>
                <div>
                    <h1>Votre Boutique en un click!</h1>
                    <p>La qualité est ce qui nous differencie</p>
                    <button><Link to="/about">Voir plus </Link></button>
                </div>
                <div> <img src={url}></img></div>
            </div>
        </div>
    );
}

export default Home;
