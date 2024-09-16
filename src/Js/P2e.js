import React from 'react';
import '../Css/P2e.css';


const PlayToEarn = ({p2eAnim, soon, PLANET, OctiesCosmo, starship}) => {

  return (
    <div className={`P2E_Window ${p2eAnim ? 'fade-out' : ''}`}>
      <div class="background-container">
      <div class="clouds"></div>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
      <img src={soon} id='soontext'alt=''/>
      <img src={OctiesCosmo} id='cosmo'alt=''/>
      <img src={starship} id='starship'alt=''/>
      <img src={PLANET} id='planet' alt=''/>
    </div>
);
};

export default PlayToEarn;
