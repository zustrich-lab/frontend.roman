import React from 'react';
import '../Css/First.css';
import gipsy from'../IMG/All_Logo/giphy.webp';

const First = ({ onClose, setCheckOpen }) => {
  return (
    <div className="First_Window">
      <div className='First_octis'>
          <img src={gipsy} alt='gypsy' className="Zoiberg"/>
      </div>
      <div className='Hey'>
        <p>👋 Hey!</p>
      </div>
      <div className='First_info'>
        <p>You’ve been in Telegram for a while, it’s <br/> time to get rewarded!</p>
      </div>
      <div className='OrangeBtn'>
        <div className='BtnO' onClick={(event) => {onClose(event);  setCheckOpen(true);}}>
          <p>Wow, let’s go!</p>
        </div>
      </div>
    </div>
  );
};

export default First;
