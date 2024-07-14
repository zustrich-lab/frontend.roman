import React from 'react';
import '../Css/Leaderboard.css'

import ib from '../IMG/Av/IB.png';
import logo from '../IMG/All_Logo/LBoard.png';
import first from '../IMG/LbBoard/first.png';
import second from '../IMG/LbBoard/sekond.png';
import thrid from '../IMG/LbBoard/last.png';

const Leaderboard = ({LeaderboardAnim}) => {
    return (
      <div className={`Lb_Window ${LeaderboardAnim? 'fade-out' : ''}`}>
        <div className='lb_Info'>
          <p>Telegram Wall of Fame</p>
        </div>
        <div className='Lb_Menu'>
          <div className='Lb_inside'>
            <div className='LbPhoto'>
              <img src={ib} alt='ib'/><p> ivanbahranui <br/><span id='LbColor'>1,228 OCTIES</span></p>
            </div>
            <div className='LbPhoto'>
              <p id="number">#5302384</p>
            </div>
          </div>
        
          <div className='LbBorder'>
            <div className='Lb_Logo'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='Lb_Text'>
              <p>🥇The 1st holder will get 400,000 OCTIES</p>
              <p>🥈The 2nd holder will get 250,000 OCTIES</p>
              <p>🥉The 3rd holder will get 100,000 OCTIES</p>
            </div>
          </div>

          <div className='Lb_Liders'>
            <p>1,228,499 holders</p>
          </div>
          <div className='Lb_list'>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <img src={first} alt='first'/>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <img src={second} alt='second'/>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <img src={thrid} alt='thrid'/>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#4</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#5</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#6</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#7</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#8</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#9</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#10</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#11</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#12</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#13</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#14</p>
                    </div>
                </div>

                <div className='Lb_Lider'>
                    <div className='LbPhotos'>
                        <img src={ib} alt='ib' /> <p id='txt'>ivanbahranui</p>
                    </div>
                    <div className='LbPhotos' id="medal">
                        <p>#15</p>
                    </div>
                </div>
                  
          </div>
        </div>
      </div>
    );
};

export default Leaderboard;