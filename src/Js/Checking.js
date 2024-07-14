import React from 'react';
import '../Css/Checking.css';

import V from '../IMG/All_Logo/V.png';
const Check = ( {setCheckOpen}) => {
  return (
    <div className="First_Window" id="checkwindow">

        <div className='Chk_Info'>
            <p>Checking<br/>your account</p>
        </div>

        <div className='Load'>
            <div className='CheckLoad'>
                <div className='CheckUp'>
                    <p>Account Age Verifed</p>
                    <img src={V} alt="V"/>
                </div>
                <div className='CheckDown'>
                    <div className='ProgressCheck'></div>
                </div>
            </div>

            <div className='CheckLoad'>
                <div className='CheckUp'>
                    <p>Activity Level Analyzed</p>
                    <img src={V} alt="V"/>
                </div>
                <div className='CheckDown'>
                    <div className='ProgressCheck'></div>
                </div>
            </div>

            <div className='CheckLoad'>
                <div className='CheckUp'>
                    <p>Telegram Premium Checked</p>
                    <img src={V} alt="V"/>
                </div>
                <div className='CheckDown'>
                    <div className='ProgressCheck'></div>
                </div>
            </div>

            <div className='CheckLoad'>
                <div className='CheckUp'>
                    <p>OC Status Confirmed</p>
                    <img src={V} alt="V"/>
                </div>
                <div className='CheckDown'>
                    <div className='ProgressCheck'></div>
                </div>
            </div>
        </div>

        <div className='OrangeBtn' id="checkBtn">
            <div className='BtnO' onClick={(event) => {setCheckOpen(false);}}>
                <p>Continue</p>
            </div>
        </div>
        
    </div>
  );
};

export default Check;
