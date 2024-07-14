import React from 'react';
import '../Css/First.css';

import Octis from '../IMG/All_Logo/giphy_octies.png';

const First = ({ onClose }) => {
  return (
    <div className="First_Window">
      <div className='First_octis'>
        <img src={Octis} alt='Octis' />
      </div>
      <div className='Hey'>
        <p>👋 Hey!</p>
      </div>
      <div className='First_info'>
        <p>You’ve been in Telegram for a while, it’s <br/> time to get rewarded!</p>
      </div>
      <div className='OrangeBtn'>
        <div className='BtnO' onClick={onClose}>
          <p>Wow, let’s go!</p>
        </div>
      </div>
    </div>
  );
};

export default First;
