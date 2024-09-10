import React from 'react';
import '../Css/P2e.css';
import soon from '../IMG/ComingSoon/Text_soon.png';
import PLANET from '../IMG/ComingSoon/PLANET.png';
import OctiesCosmo from '../IMG/ComingSoon/OctiesCosmo.png';
import starship from '../IMG/ComingSoon/starship.png';

const PlayToEarn = ({p2eAnim}) => {

  return (
    <div className={`P2E_Window ${p2eAnim ? 'fade-out' : ''}`}>
      <img src={soon} id='soontext'alt=''/>
    
      
      <img src={OctiesCosmo} id='cosmo'alt=''/>
      
      <img src={starship} id='starship'alt=''/>
      <img src={PLANET} id='planet' alt=''/>
      
    </div>

);
};

export default PlayToEarn;
