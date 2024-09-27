import React from 'react';
import '../Css/P2e.css';
import { P2e_Soon, P2e_OctiesCosmo,
         P2e_Planet, P2e_starship} from "../IMG/ComingSoon";

const PlayToEarn = () => {

  return (
    <div className='P2E_Window' >
      <div class="background-container">
      <div class="clouds"></div>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
      <img src={P2e_Soon} id='soontext'alt=''/>
      <img src={P2e_OctiesCosmo} id='cosmo'alt=''/>
      <img src={P2e_starship} id='starship'alt=''/>
      <img src={P2e_Planet} id='planet' alt=''/>
    </div>
);
};

export default PlayToEarn;
