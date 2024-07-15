import React, { useState, useEffect } from 'react';
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
  const [coins, setCoins] = useState(0);
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
  const [OctOpen, setOctOpen] = useState(false);

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
        setHasTelegramPremium(data.hasTelegramPremium);

        const accountCreationDate = new Date(data.accountCreationDate);
        const currentYear = new Date().getFullYear();
        const accountYear = accountCreationDate.getFullYear();
        const yearsOld = currentYear - accountYear;
        const accountAgeCoins = yearsOld * 500;
        const subscriptionCoins = data.hasCheckedSubscription ? 1000 : 0;

        setAccountAgeCoins(accountAgeCoins);
        setSubscriptionCoins(subscriptionCoins);

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

  const Tg_Channel_Open_chek = () => {
        window.location.href = TG_CHANNEL_LINK;
      };

  useEffect(() => {
       if (window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.expand();
        }
   }, []);

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
        <div className='Txt' onClick={(event) => { setYearsOpen(true); }}>
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
            <img onClick={Tg_Channel_Open_chek} src={Join} alt='Join' />
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
              <p>+{accountAgeCoins} OCTIES</p>
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

      {CheckOpen && (<Check setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen} />)}

      {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen} />)}

      {OctOpen && (<Oct onClose={setOctOpen} setYearsOpen={setYearsOpen} />)}

      {isLeaderboardOpen && (<Leaderboard LeaderboardAnim={LeaderboardAnim} userId={userId} />)}

      {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim} invite={invite} referralCode={referralCode} telegramLink={telegramLink} />)}

    </div>
  );
}

export default App;

// const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';

// function App() {
//   const [coins, setCoins] = useState(0);
//   const [hasTelegramPremium, setHasTelegramPremium] = useState(false);
//   const [accountAgeCoins, setAccountAgeCoins] = useState(0);
//   const [subscriptionCoins, setSubscriptionCoins] = useState(0);
//   const [referralCode, setReferralCode] = useState('');
//   const [telegramLink, setTelegramLink] = useState('');

//   const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
//   const [isFrendsOpen, setIsFrendsOpen] = useState(false);
//   const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
//   const [CheckOpen, setCheckOpen] = useState(false);
//   const [YearsOpen, setYearsOpen] = useState(false);
//   const [OctOpen, setOctOpen] = useState(false)

//   const [FriendsAnim, setFriendsAnim] = useState(false);
//   const [LeaderboardAnim, setLeaderboardAnim] = useState(false);
//   const [app, setApp] = useState(false);
//   const TG_CHANNEL_LINK = "https://t.me/GOGOGOGOGOGOGOGgogogooo";

//   const fetchUserData = async (userId) => {
//     try {
//       const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-coins`, { userId });
//       const data = response.data;
//       if (response.status === 200) {
//         setCoins(data.coins);
//         setHasTelegramPremium(data.hasTelegramPremium);

//         // Calculate coins for account age and subscription separately
//         const accountCreationDate = new Date(data.accountCreationDate);
//         const currentYear = new Date().getFullYear();
//         const accountYear = accountCreationDate.getFullYear();
//         const yearsOld = currentYear - accountYear;
//         const accountAgeCoins = yearsOld * 500;
//         const subscriptionCoins = data.hasCheckedSubscription ? 1000 : 0;

//         setAccountAgeCoins(accountAgeCoins);
//         setSubscriptionCoins(subscriptionCoins);

//         // Fetch referral code and link
//         const referralResponse = await axios.post(`${REACT_APP_BACKEND_URL}/generate-referral`, { userId });
//         const referralData = referralResponse.data;
//         if (referralResponse.status === 200) {
//           setReferralCode(referralData.referralCode);
//           setTelegramLink(referralData.telegramLink);
//         } else {
//           console.error('Ошибка при получении реферальных данных:', referralData.message);
//         }
//       } else {
//         console.error('Ошибка при получении данных пользователя:', data.error);
//       }
//     } catch (error) {
//       console.error('Ошибка при получении данных пользователя:', error);
//     }
//   };

//   useEffect(() => {
//     const userId = new URLSearchParams(window.location.search).get('userId');
//     if (userId) {
//       fetchUserData(userId);
//     } else {
//       console.error('userId не найден в URL');
//     }
//   }, []);

//   const Tg_Channel_Open_chek = () => {
//     window.location.href = TG_CHANNEL_LINK;
//   };

//   useEffect(() => {
//     if (window.Telegram.WebApp) {
//       const tg = window.Telegram.WebApp;
//       tg.expand();
//     }
//   }, []);

//   const handleHome = () => {
//     setFriendsAnim(true);
//     setLeaderboardAnim(true);
//     setTimeout(() => { setIsLeaderboardOpen(false); }, 300);
//     setTimeout(() => { setIsFrendsOpen(false); }, 300);
//     setApp(false);
//   };

//   const handleFrends = () => {
//     setIsFrendsOpen(true);
//     setFriendsAnim(false);
//     setLeaderboardAnim(true);
//     setTimeout(() => { setIsLeaderboardOpen(false); }, 300);
//     setApp(true);}

//   const handleLeaderboard = () => {
//     setIsLeaderboardOpen(true);
//     setFriendsAnim(true);
//     setLeaderboardAnim(false);
//     setTimeout(() => { setIsFrendsOpen(false); }, 300);
//     setApp(true);}

//   const handleFirstPageClose = () => {
//     setFPage(false);
//     localStorage.setItem('FPage', 'false');
//   };

//   const userId = new URLSearchParams(window.location.search).get('userId');

//   return (
//     <div className="App">
//       {app && <div className='blk'></div>}
//       <div className="info">
//         <img src={Logo} alt='Logo' />
//         <div className='Txt' onClick={(event) => {setYearsOpen(true);}}>
//           <img src={Play} alt='Play' />
//           <p>Your Score</p>
//         </div>
//       </div>
//       <div className="main" onClick={(event) => {localStorage.clear();}}>
//         <img src={Octo} alt='Octo' />
//       </div>
//       <div className='MainCoin'>
//         <p>{coins} OCTIES</p>
//       </div>
//       <div className='Menu'>
//         <div className='MenuBorder'>
//           <p id='up'>OCTIES COMMUNITY</p>
//           <p id='dp'>Home for Telegram OCs</p>
//           <div className='MenuBtn'>
//             <img onClick={Tg_Channel_Open_chek} src={Join} alt='Join'/>
//             <p>+ 1000 OCTIES</p>
//           </div>
//         </div>
//         <div className='Reward'>
//           <p>Your Rewards</p>
//         </div>
//         <div className='Tasks'>
//           <div className='TS'>
//             <div className='tsPhoto'>
//               <img src={TS1} alt='TS1' /> <p id='txt'>Account age</p>
//             </div>
//             <div className='tsPhoto'>
//               <p>+{accountAgeCoins} OCTIES</p>
//             </div>
//           </div>

//           <div className='TS'>
//             <div className='tsPhoto'>
//               <img src={TS2} alt='TS2' /> <p id='txt'>Telegram Premium</p>
//             </div>
//             <div className='tsPhoto'>
//               <p>+{hasTelegramPremium ? 500 : 0} OCTIES</p>
//             </div>
//           </div>

//           <div className='TS'>
//             <div className='tsPhoto'>
//               <img src={TS3} alt='TS3' /> <p id='txt'>Channel Subscription</p>
//             </div>
//             <div className='tsPhoto'>
//               <p>+{subscriptionCoins} OCTIES</p>
//             </div>
//           </div>

//           <div className='TS'>
//             <div className='tsPhoto'>
//               <img src={TS4} alt='TS4' /> <p id='txt'>Invites</p>
//             </div>
//             <div className='tsPhoto'>
//               <p>+125,995 OCTIES</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='BTNLow'>
//         <div className='LowerBTN'>
//           <div className='BTN' onClick={handleHome}>
//             <img src={IconHome} alt='IconHome' />
//           </div>
//           <div className='BTN' onClick={handleLeaderboard}>
//             <img src={IconLeaderboard} alt='IconLeaderboard' />
//           </div>
//           <div className='BTN' onClick={handleFrends}>
//             <img src={IconFriends} alt='IconFriends' />
//           </div>
//         </div>
//       </div>

//       {FPage && (<First onClose={handleFirstPageClose} setCheckOpen={setCheckOpen} />)}

//       {CheckOpen && (<Check  setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen}/>)}

//       {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen}/>)}

//       {OctOpen && (<Oct onClose={setOctOpen} setYearsOpen={setYearsOpen}/>)}

//       {isLeaderboardOpen && (<Leaderboard LeaderboardAnim={LeaderboardAnim} userId={userId}/>)}

//       {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim} invite={invite} referralCode={referralCode} telegramLink={telegramLink}/>)}

//     </div>
//   );
// }

// export default App;
