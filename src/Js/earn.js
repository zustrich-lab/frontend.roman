import React from 'react';
import '../Css/earn.css'

import gray_8nogIcon from '../IMG/gray_8nog.png';
import znakLogo from '../IMG/Znak.png';



const Earn = () => {
    return (
      <div className='Ref_Earn_Shop_Window ' id="EarnWindow">

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
            
            <div className="ScrollBorder">
                <div className="EarnSkrollMenu">

                    <div className="TaskBorder">
                        <div className="Task">
                            <div className='TaskText'>
                            <p>LEVEL UP </p>
                            <p>TO LEVEL 3</p>
                            </div>
                            <div className='TaskIMG'>
                                
                            </div>
                        </div>
                        <div id="BigTask" className="Task">
                            <p>CHANGE AVATAR</p>
                            <p>ADD "BITCLIF" TO</p>
                            <p>NICKNAME</p>
                            
                            <p id='littleEarn_p'>Name | Bitclif</p>
                        </div>
                    </div>
                    
                    <div className="TaskBorder">
                        <div className="Task">
                            <div className='TaskText'>
                                <p>INVITE 3</p>
                                <p>FRIENDS</p>
                            </div>
                            <div className='TaskIMG'>
                               
                            </div>
                        </div>
                        <div id="BigTask" className="Task" >
                            <p>FOLLOW US IN</p>
                            <p>TELEGRAM</p>
                            <p>CHANNEL</p>
                           
                                <p id='littleEarn_p'>BitclifGame CHANNEL</p>
                        </div>
                    </div>

                    <div className="TaskBorder">
                        <div className="Task" >
                            <div className='TaskText'>
                                <p>FOLLOW US</p>
                                <p>IN X</p>
                            </div>
                            <div className='TaskIMG'>
                               
                            </div>
                        </div>
                        <div id="BigTask" className="Task">
                            <p>FOLLOW US IN</p>
                            <p>TELEGRAM CHAT</p>
                           
                                <p id='littleEarn_p'>BitclifGame CHAT</p>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default Earn;