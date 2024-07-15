import React from 'react';
import '../Css/Oct.css';

import Octo from '../IMG/All_Logo/Octo.png';

const Oct = ({onClose}) => {
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
            <img src={Octo} alt='Octo'/>
            <p id="Ytxt">838 OCTIES</p>
        </div>
        <div className='YearInfo'>
            <p>Thanks for your time on Telegram 🤝</p>
        </div>
        <div className="OrangeBtn" id='YearBTN'>
            <div className='BtnO' onClick={(event) => {onClose(false);}}>
                <p>Continue</p>
            </div>
        </div>
    </div>
  );
};

export default Oct;