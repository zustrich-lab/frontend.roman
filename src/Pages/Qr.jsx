
import React from 'react';
import '../Css/Qr.css';
import QrOcties from '../IMG/All_Logo/QrOcties.png';
import QrTg from '../IMG/All_Logo/QrTg.png';

const Qr = () => {

  return (
    <div className="Qr_Window">
        <p>PLAY ON MOBILE</p>
        <img src={QrOcties} id='QrOcties' alt=''/>
        <img src={QrTg} id='QrTg' alt=''/>
    </div>
  );

};

export default Qr;
