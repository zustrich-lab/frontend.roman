import React from 'react';
import '../Loading/Loading.css';
import Octo from '../IMG/All_Logo/Octo.png';

function LoadingScreenGame() {

    return (
        <div className="loading-game">
            <img src={Octo} alt='Octo'/>
        </div>
    );
}

export default LoadingScreenGame;