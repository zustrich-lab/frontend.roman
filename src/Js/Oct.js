import React, { useState, useEffect } from 'react';
import '../Css/Oct.css';

import Octo from '../IMG/All_Logo/Octo.png';
import Salut from '../IMG/All_Logo/salut.gif';

const Oct = ({ onClose }) => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    let timer;
    if (showGif) {
      timer = setTimeout(() => {
        setShowGif(false);
      }, 2400); // Set the duration of the GIF in milliseconds (e.g., 3000ms for 3 seconds)
    }
    return () => clearTimeout(timer);
  }, [showGif]);

  return (
    <div className="First_Window" id="checkwindow">
      <div className='Story'>
        <div className='StoryOne'></div>
        <div className='StoryTwo' id='TwoOcs'></div>
      </div>
      <div className='YearTxt'>
        <p>You are amazing!</p>
      </div>
      <div className='YearInfo'>
        <p>Here is your OCTIES reward</p>
      </div>
      <div className='YearMain'>
        <img src={Octo} alt='Octo' />
        <p id="Ytxt">838 OCTIES</p>
        {showGif && <img src={Salut} id='Salut' alt='Salut' />}
      </div>
      <div className='YearInfo'>
        <p>Thanks for your time on Telegram 🤝</p>
      </div>
      <div className="OrangeBtn" id='YearBTN'>
        <div className='BtnO' onClick={() => onClose(false)}>
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default Oct;
