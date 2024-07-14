import React, { useState, useEffect,useCallback  } from 'react';
import '../Css/App.css';

import Friends from './Friends';
import Leaderboard from './Leaderboard';

import TS1 from '../IMG/TaskIcon/TS1.png';
import TS2 from '../IMG/TaskIcon/TS2.png';
import TS3 from '../IMG/TaskIcon/TS3.png';
import TS4 from '../IMG/TaskIcon/TS4.png';

import IconHome from '../IMG/LowerIcon/Home.png';
import IconLeaderboard from '../IMG/LowerIcon/Leaderboard.png';
import IconFriends from '../IMG/LowerIcon/Friends.png'


import Logo from '../IMG/All_Logo/Logo.png';
import Play from '../IMG/All_Logo/Play.png';
import Octo from '../IMG/All_Logo/Octo.png';

function App() {

  const Coin = 128.293

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFrendsOpen, setIsFrendsOpen] = useState(false);


  const [FriendsAnim, setFriendsAnim] = useState(false);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);

  
  const handleBackButtonSetup = useCallback((onClick) => {
    if (window.Telegram.WebApp) {
      const backButton = window.Telegram.WebApp.BackButton;
      backButton.show();
      backButton.offClick(); 
      backButton.onClick(onClick); 
    }
  }, []);

  const handleHome = () => {
    setFriendsAnim(true);
    setTimeout(() => { setIsLeaderboardOpen(false);  }, 300);
    setTimeout(() => { setIsFrendsOpen(false); }, 300);
  };

  const handleFrends = useCallback(() => {
    setIsFrendsOpen(true); 
    setIsLeaderboardOpen(false);
    setFriendsAnim(false);
    handleBackButtonSetup(() => {if (window.Telegram.WebApp.BackButton.isVisible) {window.Telegram.WebApp.BackButton.hide();}});}, [handleBackButtonSetup]);

  const handleLeaderboard = useCallback(() => {
    setIsLeaderboardOpen(true); setIsFrendsOpen(false);
    handleBackButtonSetup(() => {if (window.Telegram.WebApp.BackButton.isVisible) {window.Telegram.WebApp.BackButton.hide();}});}, [handleBackButtonSetup]);


  return (
      <div className="App">
        <div className = "info">
          <img src={Logo} alt='Logo'/>
          <div className='Txt'>
            <img src={Play} alt='Play'/>
            <p>Your Score</p>
          </div>
        </div>
        <div className="main">
          <img src={Octo} alt='Octo'/>
        </div>
        <div className='MainCoin'>
          <p>{Coin} OCTIES</p>
        </div>
        <div className='Menu'>
          <div className='MenuBorder'>
            <p id='up'>OCTIES COMMUNITY</p>
            <p id='dp'>Home for Telegram OCs</p>
            <div className='MenuBtn'>
              <button>Join</button>
              <p>+ 1000 OCTIES</p>
            </div>
          </div>
          <div className='Reward'>
            <p>Your Rewards</p>
          </div>
          <div className='Tasks'>

            <div className='TS'>
              <div className='tsPhoto'>
                <img src={TS1} alt='TS1' /> <p id='txt'>Account age</p>
              </div>
              <div className='tsPhoto'>
                <p>+838 OCTIES</p>
              </div>
            </div>

            <div className='TS'>
              <div className='tsPhoto'>
                <img src={TS2} alt='TS2'/> <p id='txt'>Telegram Premium</p>
              </div>
              <div className='tsPhoto'>
                <p>+500 OCTIES</p>
              </div>
            </div>

            <div className='TS'>
              <div className='tsPhoto'>
                <img src={TS3} alt='TS3'/> <p id='txt'>Channel Subscription</p>
              </div>
              <div className='tsPhoto'>
                <p>+1,000 OCTIES</p>
              </div>
            </div>

            <div className='TS'>
              <div className='tsPhoto'>
                <img src={TS4} alt='TS4'/> <p id='txt'>Invites</p>
              </div>
              <div className='tsPhoto'>
                <p>+125,995 OCTIES</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='BTNLow'>
          <div className='LowerBTN'>
            <div className='BTN' onClick={handleHome}>
              <img src={IconHome} alt='IconHome'/>
            </div>
            <div className='BTN' onClick={handleLeaderboard}>
              <img src={IconLeaderboard} alt='IconLeaderboard'/>
            </div>
            <div className='BTN' onClick={handleFrends}>
              <img src={IconFriends} alt='IconFriends'/>
            </div>
          </div> 
        </div>

        {isLeaderboardOpen && (<Leaderboard />)}

        {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim}/>)}

      </div>
  );
}
export default App;