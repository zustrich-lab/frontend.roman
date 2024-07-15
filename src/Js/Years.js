import React from 'react';
import '../Css/Years.css';
import star from '../IMG/All_Logo/star.gif'

const Years = ({onClose, setOctOpen}) => {
  return (
    <div className="First_Window" id="checkwindow">
        <div className='Story'>
            <div className='StoryOne'></div>
            <div className='StoryTwo'></div>
        </div>
        <div className='YearTxt'> 
            <p>Rising star!</p>
        </div>
        <div className='YearInfo'>
            <p>You have joined Telegram</p>
        </div>
        <div className='YearMain'>
            <p>1</p>
            <p id="Ytxt">year ago</p>
            <img src={star} id='Salut' alt='star'/>
        </div>
        <div className="OrangeBtn" id='YearBTN'>
            <div className='BtnO' onClick={(event) => { onClose(false); setOctOpen(true);}}>
                <p>Continue</p>
            </div>
        </div>
    </div>
  );
};

export default Years;