import React, { useState, useEffect } from 'react';
import '../Css/App.css';
import axios from 'axios';

import Friends from './Friends';
import Leaderboard from './Leaderboard';
import First from './Firstpage';
import Check from './Checking';

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

const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';

function App() {
  const [coins, setCoins] = useState(0);
  const [referralCoins, setReferralCoins] = useState(0); // Состояние для монет за рефералов
  const [hasTelegramPremium, setHasTelegramPremium] = useState(false);
  const [accountAgeCoins, setAccountAgeCoins] = useState(0);
  const [subscriptionCoins, setSubscriptionCoins] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [telegramLink, setTelegramLink] = useState('');

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFrendsOpen, setIsFrendsOpen] = useState(false);
  const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
  const [CheckOpen, setCheckOpen] = useState(false);

  const [FriendsAnim, setFriendsAnim] = useState(false);
  const [LeaderboardAnim, setLeaderboardAnim] = useState(false);
  const [app, setApp] = useState(false);
  const TG_CHANNEL_LINK = "https://t.me/GOGOGOGOGOGOGOGgogogooo";

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-coins`, { userId });
      const data = response.data;
      if (response.status === 200) {
        setCoins(data.coins);
        setReferralCoins(data.referralCoins); // Устанавливаем монеты за рефералов
        setHasTelegramPremium(data.hasTelegramPremium);

        // Calculate coins for account age and subscription separately
        const accountCreationDate = new Date(data.accountCreationDate);
        const currentYear = new Date().getFullYear();
        const accountYear = accountCreationDate.getFullYear();
        const yearsOld = currentYear - accountYear;
        const accountAgeCoins = yearsOld * 500;
        const subscriptionCoins = data.hasCheckedSubscription ? 1000 : 0;

        setAccountAgeCoins(accountAgeCoins);
        setSubscriptionCoins(subscriptionCoins);

        // Fetch referral code and link
        const referralResponse = await axios.post(`${REACT_APP_BACKEND_URL}/generate-referral`, { userId });
        const referralData = referralResponse.data;
        if (referralResponse.status === 200) {
          setReferralCode(referralData.referralCode);
          setTelegramLink(referralData.telegramLink);
        } else {
          console.error('Ошибка при получении реферальных данных:', referralData.message);
        }
      } else {
        console.error('Ошибка при получении данных пользователя:', data.error);
      }
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
      fetchUserData(userId);
    } else {
      console.error('userId не найден в URL');
    }
  }, []);

  const Tg_Channel_Open_chek = () => {
    window.location.href = TG_CHANNEL_LINK;
  };

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
    setApp(true);
  };

  const handleLeaderboard = () => {
    setIsLeaderboardOpen(true);
    setFriendsAnim(true);
    setLeaderboardAnim(false);
    setTimeout(() => { setIsFrendsOpen(false); }, 300);
    setApp(true);
  };

  const handleFirstPageClose = () => {
    setFPage(false);
    localStorage.setItem('FPage', 'false');
  };

  const userId = new URLSearchParams(window.location.search).get('userId');

  return (
    <div className="App">
      {app && <div className='blk'></div>}
      <div className="info">
        <img src={Logo} alt='Logo' />
        <div className='Txt'>
          <img src={Play} alt='Play' />
          <p>Your Score</p>
        </div>
      </div>
      <div className="main" onClick={(event) => { localStorage.clear(); }}>
        <img src={Octo} alt='Octo' />
      </div>
      <div className='MainCoin'>
        <p>{coins} OCTIES</p>
      </div>
      <div className='Menu'>
        <div className='MenuBorder'>
          <p id='up'>OCTIES COMMUNITY</p>
          <p id='dp'>Home for Telegram OCs</p>
          <div className='MenuBtn'>
            <button onClick={Tg_Channel_Open_chek}>Join</button>
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
              <p>{accountAgeCoins} OCTIES</p>
            </div>
          </div>

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS2} alt='TS2' /> <p id='txt'>Telegram Premium</p>
            </div>
            <div className='tsPhoto'>
              <p>+{hasTelegramPremium ? 500 : 0} OCTIES</p>
            </div>
          </div>

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS3} alt='TS3' /> <p id='txt'>Channel Subscription</p>
            </div>
            <div className='tsPhoto'>
              <p>+{subscriptionCoins} OCTIES</p>
            </div>
          </div>

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS4} alt='TS4' /> <p id='txt'>Invites</p>
            </div>
            <div className='tsPhoto'>
              <p>+{referralCoins} OCTIES</p> {/* Используем состояние referralCoins */}
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

      {CheckOpen && (<Check setCheckOpen={setCheckOpen} />)}

      {isLeaderboardOpen && <Leaderboard LeaderboardAnim={LeaderboardAnim} userId={userId} />}

      {isFrendsOpen && (
        <Friends
          FriendsAnim={FriendsAnim}
          invite={invite}
          referralCode={referralCode}
          telegramLink={telegramLink}
        />)}

    </div>
  );
}

export default App;
