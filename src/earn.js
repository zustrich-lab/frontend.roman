import React from 'react';
import './earn.css'

import gray_8nogIcon from './IMG/gray_8nog.png';
import znakLogo from './IMG/Znak.png';

const Earn = ({onClose}) => {
    return (
        <div className="Ref_Earn_Window">

            <div className="Ref_Earn_BoxBorder">
                <div className='Ref_Earn_Box'>
                    <img src={gray_8nogIcon} alt='gray_8nogIcon' height={"80%"}/>
                </div>
                <div className='Ref_Earn_BoxTitle'>
                    <div className='Ref_Earn_BoxUp'>
                        <p>WEEKLY TASKS</p>
                    </div>
                    <div className='Ref_Earn_BoxDown'>
                        <div className='Ref_Earn_BoxLeft'>
                            <img src={znakLogo} alt='znakLogo' height={"50%"}/>
                        </div>
                        <div className='Ref_Earn_BoxRight'>
                            <p>COMPLATE WEEKLY</p>
                            <p>TASKS AND <span className="Ref_Earn_Purple">EARN</span></p>
                            <p className="Ref_Earn_Purple" >MORE ITEMS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="EarnClose">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Earn;