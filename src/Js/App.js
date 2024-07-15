import React, { useState, useEffect } from 'react';
import '../Css/App.css';

import Friends from './Friends';
import Leaderboard from './Leaderboard';
import First from './Firstpage';
import Check from './Checking';
import Years from './Years';
import Oct from './Oct';

import TS1 from '../IMG/TaskIcon/TS1.png';
import TS2 from '../IMG/TaskIcon/TS2.png';
import TS3 from '../IMG/TaskIcon/TS3.png';
import TS4 from '../IMG/TaskIcon/TS4.png';

import IconHome from '../IMG/LowerIcon/Home.png';
import IconLeaderboard from '../IMG/LowerIcon/Leaderboard.png';
import IconFriends from '../IMG/LowerIcon/Friends.png';

import Logo from '../IMG/All_Logo/Logo.png';
import Play from '../IMG/All_Logo/Play.png';
import Octo from '../IMG/All_Logo/Octo.png';
import invite from '../IMG/All_Logo/Invite_png.png';
import Join from '../IMG/All_Logo/Join.png';

function App() {
  const Coin = 128.293;

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFrendsOpen, setIsFrendsOpen] = useState(false);
  const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
  const [CheckOpen, setCheckOpen] = useState(false);
  const [YearsOpen, setYearsOpen] = useState(false);
  const [OctOpen, setOctOpen] = useState(false)

  const [FriendsAnim, setFriendsAnim] = useState(false);
  const [LeaderboardAnim, setLeaderboardAnim] = useState(false);
  const [app, setApp] = useState(false);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);

  const handleHome = () => {
    setFriendsAnim(true);
    setLeaderboardAnim(true);
    setTimeout(() => { setIsLeaderboardOpen(false); }, 300);
    setTimeout(() => { setIsFrendsOpen(false); }, 300);
    setApp(false);
  };

  const handleFrends = () => {
    setIsFrendsOpen(true);
    setFriendsAnim(false);
    setLeaderboardAnim(true);
    setTimeout(() => { setIsLeaderboardOpen(false); }, 300);
    setApp(true);}

  const handleLeaderboard = () => {
    setIsLeaderboardOpen(true);
    setFriendsAnim(true);
    setLeaderboardAnim(false);
    setTimeout(() => { setIsFrendsOpen(false); }, 300);
    setApp(true);}

  const handleFirstPageClose = () => {
    setFPage(false);
    localStorage.setItem('FPage', 'false');
  };

  return (
    <div className="App">
      {app && <div className='blk'></div>}
      <div className="info">
        <img src={Logo} alt='Logo' />
        <div className='Txt' onClick={(event) => {setYearsOpen(true);}}>
          <img src={Play} alt='Play' />
          <p>Your Score</p>
        </div>
      </div>
      <div className="main" onClick={(event) => {localStorage.clear();}}>
        <img src={Octo} alt='Octo' />
      </div>
      <div className='MainCoin'>
        <p>{Coin} OCTIES</p>
      </div>
      <div className='Menu'>
        <div className='MenuBorder'>
          <p id='up'>OCTIES COMMUNITY</p>
          <p id='dp'>Home for Telegram OCs</p>
          <div className='MenuBtn'>
            <img src={Join} alt='Join'/>
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
              <img src={TS2} alt='TS2' /> <p id='txt'>Telegram Premium</p>
            </div>
            <div className='tsPhoto'>
              <p>+500 OCTIES</p>
            </div>
          </div>

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS3} alt='TS3' /> <p id='txt'>Channel Subscription</p>
            </div>
            <div className='tsPhoto'>
              <p>+1,000 OCTIES</p>
            </div>
          </div>

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS4} alt='TS4' /> <p id='txt'>Invites</p>
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
            <img src={IconHome} alt='IconHome' />
          </div>
          <div className='BTN' onClick={handleLeaderboard}>
            <img src={IconLeaderboard} alt='IconLeaderboard' />
          </div>
          <div className='BTN' onClick={handleFrends}>
            <img src={IconFriends} alt='IconFriends' />
          </div>
        </div>
      </div>

      {FPage && (<First onClose={handleFirstPageClose} setCheckOpen={setCheckOpen} />)}

      {CheckOpen && (<Check  setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen}/>)}

      {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen}/>)}

      {OctOpen && (<Oct onClose={setOctOpen}/>)}

      {isLeaderboardOpen && (<Leaderboard LeaderboardAnim={LeaderboardAnim} />)}

      {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim} invite={invite} />)}

    </div>
  );
}

export default App;
