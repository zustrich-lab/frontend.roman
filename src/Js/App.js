import React, { useState, useEffect, useCallback } from 'react';
import '../Css/App.css';
import axios from 'axios';

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
import galo4ka from '../IMG/All_Logo/galol4ka.png';

import IconHome from '../IMG/LowerIcon/Home.png';
import IconLeaderboard from '../IMG/LowerIcon/Leaderboard.png';
import IconFriends from '../IMG/LowerIcon/Friends.png';

import Logo from '../IMG/All_Logo/Logo.png';
import Play from '../IMG/All_Logo/Play.png';
import Octo from '../IMG/All_Logo/Octo.png';
import invite from '../IMG/All_Logo/Invite_png.png';
import Join from '../IMG/All_Logo/Join.png';

const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';

function App() {

  function handleHomeWithVibration() {
    handleHome();
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleLeaderboardWithVibration() {
    handleLeaderboard();
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleFrendsWithVibration() {
    handleFrends();
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  if (!localStorage.getItem('Galka')) { localStorage.setItem('Galka', 'false'); }
  const Galo4ka = localStorage.getItem('Galka') === 'true';
  if (!localStorage.getItem('Knopka')) { localStorage.setItem('Knopka', 'true'); }
  const Knopka = localStorage.getItem('Knopka') === 'true';

  const [VisibleTelegramPremium, setVisibleTelegramPremium] = useState(false);
  const [coins, setCoins] = useState(0);
  //const [referralCoins, setReferralCoins] = useState(0);
  const [hasTelegramPremium, setHasTelegramPremium] = useState(false);
  const [accountAgeCoins, setAccountAgeCoins] = useState(0);
  const [subscriptionCoins, setSubscriptionCoins] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [telegramLink, setTelegramLink] = useState('');

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFrendsOpen, setIsFrendsOpen] = useState(false);
  const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
  const [CheckOpen, setCheckOpen] = useState(false);
  const [YearsOpen, setYearsOpen] = useState(false);
  const [OctOpen, setOctOpen] = useState(false)
  const [Yearr, setYearr] = useState(0)

  const [FriendsAnim, setFriendsAnim] = useState(false);
  const [LeaderboardAnim, setLeaderboardAnim] = useState(false);
  const [app, setApp] = useState(false);
  const TG_CHANNEL_LINK = "https://t.me/octies_channel";

  const fetchUserData = useCallback(async (userId) => {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-coins`, { userId });
      const data = response.data;
      if (response.status === 200) {
        const referralCoins = data.referredUsers.reduce((acc, ref) => acc + ref.earnedCoins, 0);
        setCoins(data.coins + referralCoins);
        setHasTelegramPremium(data.hasTelegramPremium);

        // Calculate coins for account age and subscription separately
        const accountCreationDate = new Date(data.accountCreationDate);
        const currentYear = new Date().getFullYear();
        const accountYear = accountCreationDate.getFullYear();
        const yearsOld = currentYear - accountYear;
        setYearr(yearsOld);
        const accountAgeCoins = yearsOld * 500;
        const subscriptionCoins = data.hasCheckedSubscription ? 1000 : 0 ;

        if (hasTelegramPremium === true){
          setVisibleTelegramPremium(true)
        } else {
          setVisibleTelegramPremium(false)
        }
        
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
        const subscriptionResponse = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
        if (subscriptionResponse.status === 200) {
          setCoins(subscriptionResponse.data.coins);

          if(response.data.isSubscribed){
            localStorage.setItem('Galka', 'true');
            localStorage.setItem('Knopka', 'false');
          } else {
            localStorage.setItem('Galka', 'false');
            localStorage.setItem('Knopka', 'true');
          }
          
        }
      } else {
        console.error('Ошибка при получении данных пользователя:', data.error);
      }
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  }, [hasTelegramPremium]);

  // App.js

const checkSubscriptionAndUpdate = async (userId) => {
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
    if (response.status === 200) {
      // Обновляем состояние монет и подписки
      setCoins(response.data.coins);
      setSubscriptionCoins(response.data.isSubscribed ? 1000 : 0);
      if(response.data.isSubscribed){
        localStorage.setItem('Galka', 'true');
        localStorage.setItem('Knopka', 'false');
      } else {
        localStorage.setItem('Galka', 'false');
        localStorage.setItem('Knopka', 'true');
      }

    } else {
      console.error('Ошибка при проверке подписки:', response.data.error);
    }
  } catch (error) {
    console.error('Ошибка при проверке подписки:', error);
  }
};

const checkAndFetchSubscription = async (userId) => {
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
    if (response.status === 200) {
      // Обновляем состояние монет и подписки
      setCoins(response.data.coins);
      setSubscriptionCoins(response.data.isSubscribed ? 1000 : 0);
      if(response.data.isSubscribed){
        localStorage.setItem('Galka', 'true');
        localStorage.setItem('Knopka', 'false');
      } else {
        localStorage.setItem('Galka', 'false');
        localStorage.setItem('Knopka', 'true');
      }

    } else {
      console.error('Ошибка при проверке подписки:', response.data.error);
    }
  } catch (error) {
    console.error('Ошибка при проверке подписки:', error);
  }
};

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
      checkAndFetchSubscription(userId);
    } else {
      console.error('userId не найден в URL');
    }
  }, [fetchUserData]);

const Tg_Channel_Open_chek = () => {
  const userId = new URLSearchParams(window.location.search).get('userId');
  window.open(TG_CHANNEL_LINK, '_blank'); // Открываем канал в новой вкладке
  setTimeout(() => {
    checkSubscriptionAndUpdate(userId); // Проверяем подписку после задержки
  }, 5000); // Задержка в 5 секунд для того, чтобы пользователь успел подписаться
};

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
      fetchUserData(userId);
    } else {
      console.error('userId не найден в URL');
    }
  }, [fetchUserData]);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);


  const handleHome = () => {
    setIsLeaderboardOpen(false);
    setIsFrendsOpen(false);
    setFriendsAnim(true);
    setLeaderboardAnim(true);
    setApp(false);
  };

  const handleFrends = () => {
    setIsFrendsOpen(true);
    setFriendsAnim(false);
    setLeaderboardAnim(true);
    setIsLeaderboardOpen(false);
    setApp(true);
  };

  const handleLeaderboard = () => {
    setIsLeaderboardOpen(true);
    setFriendsAnim(true);
    setLeaderboardAnim(false);
    setIsFrendsOpen(false);
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
        <div className='Txt' onClick={(event) => {setYearsOpen(true);}}>
          <img src={Play} alt='Play' />
          <p>Your Score</p>
        </div>
      </div>
      <div className="main" onClick={(event) => {localStorage.clear();}}>
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
            {Knopka && <img onClick={Tg_Channel_Open_chek} src={Join} alt='Join'/>}
            <p> {Knopka && <p id="plus">+</p>} 1000 OCTIES</p>
            {Galo4ka && <img id="galo4ka" src={galo4ka} alt='galo4ka'/>}
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
              <p>+{accountAgeCoins} OCTIES</p>
            </div>
          </div>

          {VisibleTelegramPremium && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS2} alt='TS2' /> <p id='txt'>Telegram Premium</p>
            </div>
            <div className='tsPhoto'>
              <p>+{hasTelegramPremium ? 500 : 0} OCTIES</p>
            </div>
          </div>}

          {Galo4ka && <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS3} alt='TS3' /> <p id='txt'>Channel Subscription</p>
            </div>
            <div className='tsPhoto'>
              <p>+{subscriptionCoins} OCTIES</p>
            </div>
          </div>}

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={TS4} alt='TS4' /> <p id='txt'>Invites</p>
            </div>
            <div className='tsPhoto'>
              <p>+{referralCoins} OCTIES</p>
            </div>
          </div>
        </div>
      </div>

      <div className='BTNLow'>
        <div className='LowerBTN'>
          <div className={`BTN ${(isLeaderboardOpen || isFrendsOpen) ? 'img-dark' : ''}`} onClick={handleHomeWithVibration}>
            <img src={IconHome} alt='IconHome' />
          </div>
          <div className={`BTN ${!isLeaderboardOpen ? 'img-dark' : ''}`} onClick={handleLeaderboardWithVibration}>
            <img src={IconLeaderboard} alt='IconLeaderboard' />
          </div>
          <div className={`BTN ${!isFrendsOpen ? 'img-dark' : ''}`} onClick={handleFrendsWithVibration}>
            <img src={IconFriends} alt='IconFriends' />
          </div>
        </div>
      </div>

      {FPage && (<First onClose={handleFirstPageClose} setCheckOpen={setCheckOpen} />)}

      {CheckOpen && (<Check  setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen}/>)}

      {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen} Yearr={Yearr}/>)}

      {OctOpen && (<Oct onClose={setOctOpen} setYearsOpen={setYearsOpen} coins={coins}/>)}

      {isLeaderboardOpen && (<Leaderboard LeaderboardAnim={LeaderboardAnim} userId={userId} coins={coins}/>)}

      {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim} invite={invite} referralCode={referralCode} telegramLink={telegramLink}/>)}

    </div>
  );
}

export default App;