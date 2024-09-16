import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TonConnectUIProvider, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import axios from 'axios';
import '../Css/App.css';
//import pages
import First from './Firstpage';
import Check from './Checking';
import Years from './Years';
import Oct from './Oct';
import Leaderboard from './Leaderboard';
import PlayToEarn from './P2e.js';
import Friends from './Friends';
import NFTs from './NFTs.js';
import LoadingScreen from '../Loading/Loading.js';
import LoadingScreenOcto from '../Loading/LoadingOcto.js';
import LoadingScreenOctoNft from '../Loading/LoadingOctoNft.js'
//import image Friends
import invite from '../IMG/All_Logo/Invite_png.png';
//import image p2e
import soon from '../IMG/ComingSoon/Text_soon.png';
import PLANET from '../IMG/ComingSoon/PLANET.png';
import OctiesCosmo from '../IMG/ComingSoon/OctiesCosmo.png';
import starship from '../IMG/ComingSoon/starship.png';
//import image NFT
import shapka2 from '../IMG/NFTs/Shapka2.png';
import dedpool from '../IMG/NFTs/dedpool.png';
import rosomaha from '../IMG/NFTs/rosomaha.png';
import ton5 from '../IMG/NFTs/5Ton.png';
import ton55 from '../IMG/NFTs/Ton5.png';
import durov from '../IMG/NFTs/durov.png';
import Nft from '../IMG/Nft_ref/Nft_ref.png';
import Checknft from '../IMG/Nft_ref_check/chech.png';
import ChecknftDone from '../IMG/Nft_ref_check_done/Done_ref.png';
//import image Lower
import IconHome from '../IMG/LowerIcon/Home.png';
import IconLeaderboard from '../IMG/LowerIcon/Leaderboard.png';
import IconFriends from '../IMG/LowerIcon/Friends.png';
import NFTlogo from '../IMG/LowerIcon/NFTLogo.png';
import p2e from '../IMG/LowerIcon/p2e.png';
//import image Reward
import Reward_Age from '../IMG/TaskIcon/TS1.png';
import Reward_Premium from '../IMG/TaskIcon/TS2.png';
import Reward_Chanel  from '../IMG/TaskIcon/TS3.png';
import Reward_Invite from '../IMG/TaskIcon/TS4.png';
import Reward_X from '../IMG/TaskIcon/TSX.png';
import Reward_PartnerChanels from '../IMG/TaskIcon/Other_Tg.png';
import Reward_NFT from '../IMG/TaskIcon/TS_NFT.png';
import Reward_Nick from '../IMG/TaskIcon/TS_nick.png';
import Reward_pass from '../IMG/TaskIcon/passStar.png';
//import image SwapTask
import AnyTapChanel from '../IMG/All_Logo/AnyTapChanel.png';
import tgLogo from '../IMG/All_Logo/TgComunity.png';
import XLogo from '../IMG/All_Logo/XCominity.png';
import FreePosition from '../IMG/All_Logo/freePosiction.png';
import NickLogo from '../IMG/All_Logo/nick.png';
//import image SupportSwapTask
import galo4ka from '../IMG/All_Logo/galol4ka.png';
import nickGalka from '../IMG/All_Logo/galka.png';
import nickKr from '../IMG/All_Logo/nickNema.png';
import ContactUs from '../IMG/All_Logo/ContactUs.png';
import Join from '../IMG/All_Logo/Join.png';
//import image Main
import Ellipse from '../IMG/All_Logo/Ellipse.png';
import Logo from '../IMG/All_Logo/Logo.png';
import Play from '../IMG/All_Logo/Play.png';
import Octo from '../IMG/All_Logo/Octo.png';
import NFTm from '../IMG/All_Logo/NFTmint.png';
import pass from '../IMG/All_Logo/pass.png';

const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';
const userId = new URLSearchParams(window.location.search).get('userId');

function App() {

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
  };
  preloadImage(soon); 
  preloadImage(PLANET); 
  preloadImage(OctiesCosmo);
  preloadImage(starship);
  preloadImage(Nft);
  preloadImage(shapka2);
  preloadImage(dedpool);
  preloadImage(rosomaha);
  preloadImage(ton5);
  preloadImage(ton55);
  preloadImage(durov);
  preloadImage(invite);

    import('./P2e.js');
    import('./NFTs.js');
    import('./Friends');
  }, []);

  if (!localStorage.getItem('Galka')) {localStorage.setItem('Galka', 'false');}
  const Galo4ka = localStorage.getItem('Galka') === 'true';
  if (!localStorage.getItem('Knopka')) {localStorage.setItem('Knopka', 'true');}
  const Knopka = localStorage.getItem('Knopka') === 'true';
  if (!localStorage.getItem('GalkaX')) {localStorage.setItem('GalkaX', 'false');}
  const Galo4kaX = localStorage.getItem('GalkaX') === 'true';
  if (!localStorage.getItem('KnopkaX')) {localStorage.setItem('KnopkaX', 'true');}
  const KnopkaX = localStorage.getItem('KnopkaX') === 'true';
  if (!localStorage.getItem('GalkaAnyTap')) {localStorage.setItem('GalkaAnyTap', 'false');}
  const GalkaAnyTap = localStorage.getItem('GalkaAnyTap') === 'true';
  if (!localStorage.getItem('KnopkaAnyTap')) {localStorage.setItem('KnopkaAnyTap', 'true');}
  const KnopkaAnyTap = localStorage.getItem('KnopkaAnyTap') === 'true';
  if (!localStorage.getItem('KnopkaNick')) {localStorage.setItem('KnopkaNick', 'false');}
  const KnopkaNick = localStorage.getItem('KnopkaNick') === 'true';
  if (!localStorage.getItem('Sub')) { localStorage.setItem('Sub', 'false');}
  const Sub = localStorage.getItem('Sub') === 'true';
  if (!localStorage.getItem('buttonVisibleNFT')) {localStorage.setItem('buttonVisibleNFT', 'false');}
  const buttonVisible = localStorage.getItem('buttonVisibleNFT') === 'true';
  const [showNotCompleted, setShowNotCompleted] = useState(false);
  if (!localStorage.getItem('isMintNFT')) {localStorage.setItem('isMintNFT', 'false');}
  const isMint = localStorage.getItem('isMintNFT') === 'true';

  const TG_CHANNEL_LINK = "https://t.me/octies_community";
  const TG_CHANNEL_LINK2 = "https://t.me/any_tap";
  const X_LINK = "https://x.com/Octies_GameFI";
  const Support = "https://t.me/octies_manage";

  const [FriendsAnim, setFriendsAnim] = useState(false);
  const [LeaderboardAnim, setLeaderboardAnim] = useState(false);
  const [p2eAnim, setp2eAnim] = useState(false);
  const [NFTsAnim, setNFTsAnim] = useState(false);

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isFrendsOpen, setIsFrendsOpen] = useState(false);
  const [isp2eOpen, setIsp2eOpen] = useState(false);
  const [NFTsOpen, setNFTsOpen] = useState(false);
  const [alert, setalert] = useState(false);

  const [coinOnlyYears, setcoinOnlyYears] = useState(0);
  const [VisibleInvite, setVisibleInvite] = useState(false);
  const [VisibleTelegramPremium, setVisibleTelegramPremium] = useState(false);
  const [coins, setCoins] = useState(0);
  const [referralCoins, setReferralCoins] = useState(0);
  const [hasTelegramPremium, setHasTelegramPremium] = useState(false);
  const [accountAgeCoins, setAccountAgeCoins] = useState(0);
  const [referralCode, setReferralCode] = useState('');
  const [telegramLink, setTelegramLink] = useState('');
  const [FPage, setFPage] = useState(() => localStorage.getItem('FPage') !== 'false');
  const [CheckOpen, setCheckOpen] = useState(false);
  const [YearsOpen, setYearsOpen] = useState(false);
  const [OctOpen, setOctOpen] = useState(false);
  const [Yearr, setYearr] = useState(0);
  const [updatedSpots, setupdatedSpots] = useState(0);
  const [app, setApp] = useState(false);
  const [tonConnectUI] = useTonConnectUI();
  const [transactionNumber, setTransactionNumber] = useState(null);
  const [subscriptionCoins, setSubscriptionCoins] = useState(0);
  const walletAddress = useTonAddress();
  const [isLoadingOcto, setLoadingOcto] = useState(true);
  const [isLoadingOctoVs, setLoadingOctoVs] = useState(false);

  useEffect(() => {
    if (!isLoadingOcto) {
      const timeoutId = setTimeout(() => {
        setLoadingOctoVs(false);
      }, 800);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoadingOcto]);
 
  useEffect(() => {
    if (window.TON_CONNECT_UI) {
        const tonConnectUI = new window.TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json',
            buttonRootId: 'TonMainConBtn'
        });

        tonConnectUI.onStatusChange((walletInfo) => {
            if (walletInfo) {
                console.log('Кошелек подключен!', walletInfo);
            } else {
                console.log('Кошелек отключен!');
            }
        });
    }
}, []);

const sendTransaction = async () => {
  window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');

  const walletInfo = tonConnectUI.walletInfo; 
  if (!walletInfo) { 
    setalert(true);
    return; 
  }

  const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [
      {
        address: "UQC-ZK_dPpZ15VaL-kwyXT1jTCYDTQricz8RxvXT0VmdbRYG", 
        amount: "10000000", 
      },
    ],
  };

  try {
    await tonConnectUI.sendTransaction(transaction);

    const response = await axios.post(`${REACT_APP_BACKEND_URL}/record-transaction`, { userId });

    if (response.data.success) {
        setTransactionNumber(response.data.transactionNumber);
        localStorage.setItem('isMintNFT', 'true'); 
        await axios.post(`${REACT_APP_BACKEND_URL}/update-mint-status`, { userId, hasMintedNFT: true });

        alert(`Transaction successful! You are user number ${response.data.transactionNumber}`);
    } else {
        alert('Transaction failed!');
    }
  } catch (error) {
    console.error("Error sending transaction:", error);
    alert("Failed to send transaction.");
  }
};

useEffect(() => {
  const fetchAvailableSpots = async () => {
      try {
          const response = await axios.get(`${REACT_APP_BACKEND_URL}/current-spots`);
          if (response.data.success) {
               setupdatedSpots(response.data.availableSpots);
              document.getElementById("highgreen").textContent = updatedSpots;
          }
      } catch (error) {
          console.error("Ошибка при получении количества мест:", error);
      }
  };

  fetchAvailableSpots();
}, [updatedSpots]);

useEffect(() => {
  console.log('Адрес кошелька из useTonAddress:', walletAddress);
  if (walletAddress) {
    axios.post(`${REACT_APP_BACKEND_URL}/save-wallet-address`, { userId, walletAddress })
      .then(response => {
        if (response.data.success) {
          console.log('Адрес кошелька успешно сохранен.');
        } else {
          console.error('Ошибка сервера:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Ошибка при сохранении адреса кошелька:', error);
      });
  } else {
    console.error('Адрес кошелька не был получен и равен undefined');
  }
}, [walletAddress]);
//________________________________________________________________Task_Swap
  const blockRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [blockVisibility, setBlockVisibility] = useState([false, false, false, false, false]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const index = blockRefs.findIndex(ref => ref.current === entry.target);
        if (index !== -1) {
          setBlockVisibility(prevVisibility => {
            const newVisibility = [...prevVisibility];
            newVisibility[index] = entry.isIntersecting;
            return newVisibility;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    blockRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      blockRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, );
  //_______________________________________________________________________________________

  function handleHomeWithVibration() {
    setIsLeaderboardOpen(false);
    setIsFrendsOpen(false);
    setIsp2eOpen(false);
    setFriendsAnim(true);
    setp2eAnim(true);
    setLeaderboardAnim(true);
    setNFTsAnim(true);
    setApp(false);
    setNFTsOpen(false);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleLeaderboardWithVibration() {
    setApp(true);
    setIsp2eOpen(false);
    setIsFrendsOpen(false);
    setIsLeaderboardOpen(true);
    setNFTsOpen(false);
    setNFTsAnim(true);
    setLeaderboardAnim(false);
    setFriendsAnim(true);
    setp2eAnim(true);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleNFTsWithVibration() {
    setApp(true);
    setIsp2eOpen(false);
    setIsFrendsOpen(false);
    setIsLeaderboardOpen(false);
    setNFTsOpen(true);
    setNFTsAnim(false);
    setLeaderboardAnim(true);
    setFriendsAnim(true);
    setp2eAnim(true);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleP2EWithVibration() {
    setIsp2eOpen(true);
    setFriendsAnim(true);
    setp2eAnim(false);
    setLeaderboardAnim(true);
    setNFTsAnim(true);
    setIsLeaderboardOpen(false);
    setIsFrendsOpen(false);
    setApp(true);
    setNFTsOpen(false);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleFrendsWithVibration() {
    setIsFrendsOpen(true);
    setFriendsAnim(false);
    setLeaderboardAnim(true);
    setp2eAnim(true);
    setIsLeaderboardOpen(false);
    setIsp2eOpen(false);
    setApp(true);
    setNFTsAnim(true);
    setNFTsOpen(false);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  function handleOpenStoryWithVibration() {
    setYearsOpen(true);
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
  }

  const checkSubscription = useCallback(async () => {
    if (!userId) return;
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
      if (response.status === 200) {
        const data = response.data;
        setCoins(data.coins);

        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');
        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasNicknameBonus){
          localStorage.setItem('KnopkaNick', 'true');
        }
        else{
          localStorage.setItem('KnopkaNick', 'false');
        }
        
      } else {
        console.error('Ошибка при проверке подписки:', response.data.message);
      }
    } catch (error) {
      console.error('Ошибка при проверке подписки:', error);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const intervalId = setInterval(() => {
        checkSubscription();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [checkSubscription]);

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
        const intervalId = setInterval(() => {
            checkSubscriptionAndUpdate(userId);
        }, 3000); 

        return () => clearInterval(intervalId);
    }
}, []);

  const fetchUserData = useCallback(async (userId) => {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-coins`, { userId });
      const data = response.data;
      if (response.status === 200) {
        setCoins(data.coins);
        setReferralCoins(data.referralCoins);
        setHasTelegramPremium(data.hasTelegramPremium);
        setTransactionNumber(data.transactionNumber);
        setSubscriptionCoins(data.coinsSub);

        const accountCreationDate = new Date(data.accountCreationDate);
        const currentYear = new Date().getFullYear();
        const accountYear = accountCreationDate.getFullYear();
        const yearsOld = currentYear - accountYear;
        setYearr(yearsOld);
        let accountAgeCoins = yearsOld * 500;
        if (yearsOld < 1) {
          setAccountAgeCoins(300); 
        }
        setcoinOnlyYears(accountAgeCoins);
        if (data.hasTelegramPremium) {
          setVisibleTelegramPremium(true);
        }
        if (referralCoins > 0) {
          setVisibleInvite(true);
        }
        if(data.hasMintedNFT){
          localStorage.setItem('isMintNFT', 'true'); 
        }else{
          localStorage.setItem('isMintNFT', 'false'); 
        }
        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');
        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasCheckedSubscription3) {
          localStorage.setItem('GalkaAnyTap', 'true');
          localStorage.setItem('KnopkaAnyTap', 'false');
        } else {
          localStorage.setItem('GalkaAnyTap', 'false');
          localStorage.setItem('KnopkaAnyTap', 'true');
        }

        if (data.hasNicknameBonus){
          localStorage.setItem('KnopkaNick', 'true');
        }
        else{
          localStorage.setItem('KnopkaNick', 'false');
        }
        
        setLoadingOcto(false);
        setAccountAgeCoins(accountAgeCoins);
  
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
  }, [referralCoins]);

  if(subscriptionCoins > 0){
    localStorage.setItem('Sub', 'true');
  } else {
    localStorage.setItem('Sub', 'false');
  }
  
const handleCheckReferrals = () => {
    axios.post(`${REACT_APP_BACKEND_URL}/get-referral-count`, { userId })
      .then(response => {
        const referralCount = response.data.referralCount;

        if (referralCount >= 15) {
          localStorage.setItem('buttonVisibleNFT', 'true'); 
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('success');
        } else {
          setShowNotCompleted(true);
          window.Telegram.WebApp.HapticFeedback.notificationOccurred('error');
          setTimeout(() => {
            setShowNotCompleted(false);
          }, 1900);
        }
      })
      .catch(error => {
        console.error('Ошибка при проверке рефералов:', error);
      });
  };

  const checkSubscriptionAndUpdate = async (userId) => {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_URL}/check-subscription-and-update`, { userId });
      if (response.status === 200) {
        const data = response.data;
        setCoins(data.coins);
        
        if (data.hasCheckedSubscription) {
          localStorage.setItem('Galka', 'true');
          localStorage.setItem('Knopka', 'false');
        } else {
          localStorage.setItem('Galka', 'false');
          localStorage.setItem('Knopka', 'true');
        }

        if (data.hasCheckedSubscription3) {
          localStorage.setItem('GalkaAnyTap', 'true');
          localStorage.setItem('KnopkaAnyTap', 'false');
        } else {
          localStorage.setItem('GalkaAnyTap', 'false');
          localStorage.setItem('KnopkaAnyTap', 'true');
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
    

      const handleVisibilityChange = () => {
        if (!document.hidden) {
          checkSubscription(userId);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } else {
      console.error('userId не найден в URL');
    }
  }, [checkSubscription]);

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    if (userId) {
      fetchUserData(userId).then(() => {
        checkSubscription(userId).then(() => {
          fetchUserData(userId);
        });
      });
    } else {
      console.error('userId не найден в URL');
    }
  }, [fetchUserData, checkSubscription]);

  const Tg_Channel_Open_X = async () => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(X_LINK, '_blank');
    setTimeout(async () => {
        if (localStorage.getItem('KnopkaX') === 'true') {
            localStorage.setItem('KnopkaX', 'false');
            localStorage.setItem('GalkaX', 'true');
            try {
                const response = await axios.post(`${REACT_APP_BACKEND_URL}/update-coins`, { userId, amount: 500 });
                if (response.data.success) {
                    setCoins(response.data.coins);
                    if (response.data.hasReceivedTwitterReward) {
                        localStorage.setItem('hasReceivedTwitterReward', 'true');
                         setCoins(response.data.coins);
                    }
                } else {
                    console.error('Ошибка при обновлении монет:', response.data.message);
                }
            } catch (error) {
                console.error('Ошибка при обновлении монет:', error);
            }
        }
    }, 5000);
};

  const Tg_Channel_Open_chek = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(TG_CHANNEL_LINK, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
  };

  const Tg_Channel_Open_chek2 = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(TG_CHANNEL_LINK2, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
  };

  const Tg_Channel_Support = () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(Support, '_blank');
    setTimeout(() => {
      checkSubscriptionAndUpdate(userId);
    }, 3000);
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

  const getRandomColor = useCallback(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);
  return (
    <TonConnectUIProvider manifestUrl="https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json">
    <div className="App">

      {app && <div className='blk'></div>}
      {isLoadingOctoVs && <LoadingScreen isLoadingOcto={isLoadingOcto} />}
      {isMint && isLoadingOctoVs && <LoadingScreenOctoNft isLoadingOcto={isLoadingOcto} />}
      {!isMint && isLoadingOctoVs && <LoadingScreenOcto isLoadingOcto={isLoadingOcto} />}

      <div className="info">
        <img src={Logo} alt='Logo' />
        <div className='Txt' onClick={handleOpenStoryWithVibration}>
          <img src={Play} alt='Play' />
          <p>Your Score</p>
        </div>
      </div>
      {!isMint && <div className="main">
        <img src={Octo} alt='Octo' />
      </div>}
      {!isMint &&<div className='MainCoin'>
        
        {coins === 0 ? <p>Loading...</p> : <p>{coins.toLocaleString('en-US')} $OCTIES</p>}
      
      </div>}
      {isMint &&<div className='MintCoin'>
        <img src={NFTm} alt='NFTm'/>
        <p id='endtxt'> {coins === 0 ? <p>Loading...</p> : <p>{coins.toLocaleString('en-US')}</p>} <span id='highlight'>{transactionNumber}</span> $OCTIES</p>
      </div>}

      <div className='Menu'>
        <div className='Skroll_Menu_Border'>

          <div className='MenuBorder' ref={blockRefs[0]}>
            <div className='flex_menu_border' id='lightGreenBack'>
              <div className='rightFlex'>
                <div  id='up'>
                  <p>OCTIES COMMUNITY</p>
                </div>
                <div  id='dp'>
                  <p>Home for Telegram OCs</p>
                </div> 
                <div className='MenuBtn'>
                  {Knopka && <img onClick={Tg_Channel_Open_chek} src={Join} alt='Join' />}
                  <p id='lightGray'> {Knopka && <p id="plus">+</p>}1,000 $OCTIES</p>
                  {Galo4ka && <img id="galo4ka" src={galo4ka} alt='' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={tgLogo} alt=''/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[1]}>
            <div className='flex_menu_border'>
              <div className='rightFlex'>
                <div  id='up'>
                  <p>OCTIES X</p>
                </div>
                <div  id='dp'>
                  <p>Home for X OCs</p>
                </div> 
                <div className='MenuBtn'>
                  {KnopkaX && <img onClick={Tg_Channel_Open_X} src={Join} alt='Join' />}
                  <p> {KnopkaX && <p id="plus">+</p>}500 $OCTIES</p>
                  {Galo4kaX && <img id="galo4ka" src={galo4ka} alt='' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={XLogo} alt=''/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[2]}>
            <div className='flex_menu_border'  id='orangeBack'>
              <div className='rightFlex'>
                <div id='up'>
                  <p >AnyTap Community</p>
                </div>
                <div id='dpp'>
                  <p>Complete tasks, earn rewards, and join <br/>the on-chain community.</p>
                </div>
                <div className='MenuBtn'>
                  {KnopkaAnyTap && <img onClick={Tg_Channel_Open_chek2} src={Join} alt='Join' />}
                  <p> {KnopkaAnyTap && <p id="plus">+</p>}750 $OCTIES</p>
                  {GalkaAnyTap && <img id="galo4ka" src={galo4ka} alt='' />}
                </div>
              </div>
              <div className='leftFlex'>
                <img src={AnyTapChanel} alt=''/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[3]}>
            <div className='flex_menu_border' id='greenBack'>
              <div className='rightFlex'>
                <div  id='up'>
                  <p>Available Partner Space</p>
                </div>
                <div  id='dp'>
                  <p>Your proposition</p>
                </div> 
                <div className='MenuBtn'>
                  <img onClick={Tg_Channel_Support} src={ContactUs} alt='ContactUs' />
                  <p>+??? $OCTIES</p>
                </div>
              </div>
              <div className='leftFlex'>
                <img src={FreePosition} alt=''/>
              </div>
            </div>
          </div>

          <div className='MenuBorder' ref={blockRefs[4]}>
            <div className='flex_menu_border'>
              <div className='rightFlex'>
              <div id='up'>
                <p>OCTIES NICKNAME</p>
              </div>
              <div id='dpp'>
                <p>Add the word “Octies” to <br/>your nickname.</p>
              </div>
                <div className='MenuBtn'>
                  {KnopkaNick &&  <div className='nickDiv'>
                    <p><img src={nickGalka} alt=''/><span id='Greentxt'>Completed </span>300 $OCTIES</p>  
                  </div>}
                  {!KnopkaNick &&  <div className='nickDiv'>
                    <p><img src={nickKr} alt=''/><span id='Redtxt'>Not completed</span>+300 $OCTIES</p>  
                  </div>}
                </div>
              </div>
              <div className='leftFlex' id='nick'>
                <img src={NickLogo} alt=''/>
              </div>
             </div>
          </div>      

        </div>
        <div className='Reward'>
          <div className='EllipsSkroll'>
            <img src={Ellipse} alt='Ellips' className={blockVisibility[0] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[1] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[2] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[3] ? '' : 'img-dark'} />
            <img src={Ellipse} alt='Ellips' className={blockVisibility[4] ? '' : 'img-dark'} />
          </div>
          <p>Your Rewards</p>
        </div>
        <div className='Tasks' id={isMint ? 'TaskswithoutNft' : undefined}>
          
          <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_pass} alt='' /> <p>Unique pass</p>
            </div>
            <div className='tsPhoto'>
              <p id='highpink' ><img src={pass} id='pass' alt='' />+1 PASS</p>
            </div>
          </div>

          {isMint && <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_NFT} alt='' /> <p>OCTIES NFT</p>
            </div>
            <div className='tsPhoto'>
              <p id='highlight' >+1 NFT</p>
            </div>
          </div>}

          {Sub && <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_PartnerChanels} alt='' /> <p>Partner channels subs</p>
            </div>
            <div className='tsPhoto'>
              <p id='highlight' >+{subscriptionCoins.toLocaleString('en-US')} $OCTIES</p>
            </div>
          </div>}

          <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_Age} alt='' /> <p>Account age</p>
            </div>
            <div className='tsPhoto'>
              <p>+{accountAgeCoins.toLocaleString('en-US')} $OCTIES</p>
            </div>
          </div>

          {VisibleTelegramPremium && <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_Premium} alt='' /> <p>Telegram Premium</p>
            </div>
            <div className='tsPhoto'>
              <p>+{hasTelegramPremium ? 500 : 0} $OCTIES</p>
            </div>
          </div>}

          {Galo4ka && <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_Chanel} alt='' /> <p>Channel Subscription</p>
            </div>
            <div className='tsPhoto'>
              <p>+1,000 $OCTIES</p>
            </div>
          </div>}

          {KnopkaNick && <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_Nick} alt='' /> <p>Add "Octies" to nickname</p>
            </div>
            <div className='tsPhoto'>
              <p>+300 $OCTIES</p>
            </div>
          </div>}

          {Galo4kaX && <div className='TS'>
          <div className='tsPhoto'>
            <img src={Reward_X} alt='' /> <p>Octies X</p>
          </div>
          <div className='tsPhoto'>
            <p>+500 $OCTIES</p>
          </div>
        </div>}       

          {VisibleInvite && <div className='TS'>
            <div className='tsPhoto'>
              <img src={Reward_Invite} alt='TS4' /> <p>Invites</p>
            </div>
            <div className='tsPhoto'>
              <p>+{referralCoins.toLocaleString('en-US')} $OCTIES</p>
            </div>
          </div>}
        </div>
      </div>
      
      <footer className='BTNLow'>
        <ul className='footerItems'>
            <li className='footerItem'>
              <div className={`footerItemImgWrapper ${(isLeaderboardOpen || isFrendsOpen || isp2eOpen || NFTsOpen) ? 'img-dark' : ''}`} onClick={handleHomeWithVibration}>
                <img src={IconHome} alt='IconHome'className='footerItemImg' />
              </div>       
              <p className={`footerItemLabel ${(isLeaderboardOpen || isFrendsOpen || isp2eOpen || NFTsOpen) ? 'img-dark' : ''}`}>Home</p>
            </li>
            <li className='footerItem' >
              <div className={`footerItemImgWrapper ${!isLeaderboardOpen ? 'img-dark' : ''}`} onClick={handleLeaderboardWithVibration}>
                <img src={IconLeaderboard} alt='IconLeaderboard' className='footerItemImg'/>
              </div>
              <p className={`footerItemLabel ${!isLeaderboardOpen ? 'img-dark' : ''}`}>Ranking</p>
            </li>
            <li className='footerItem'>
              <div className={`footerItemImgWrapper ${!isp2eOpen ? 'img-dark' : ''}`} onClick={handleP2EWithVibration}>
                <img src={p2e} alt='IconFriends' className='footerItemImg'/>
              </div>
              <p className={`footerItemLabel ${!isp2eOpen ? 'img-dark' : ''}`}>Play2Earn</p>
            </li>
            <li className='footerItem'>
              <div className={`footerItemImgWrapper ${!isFrendsOpen ? 'img-dark' : ''}`} onClick={handleFrendsWithVibration}>
                <img src={IconFriends} alt='IconFriends' className='footerItemImg' />
              </div>
              <p className={`footerItemLabel ${!isFrendsOpen ? 'img-dark' : ''}`}>Friends</p>
            </li>
            <li className='footerItem'>
              <div className={`footerItemImgWrapper ${!NFTsOpen ? 'img-dark' : ''}`} onClick={handleNFTsWithVibration}>
                <img src={NFTlogo} alt='IconFriends' className='footerItemImg' />
              </div>
              <p className= {`footerItemLabel ${!NFTsOpen ? 'img-dark' : ''}`}>NFTs</p>
            </li>
          </ul>
      </footer>
     
      {FPage && (<First onClose={handleFirstPageClose} setCheckOpen={setCheckOpen} />)}
      {CheckOpen && (<Check setCheckOpen={setCheckOpen} setYearsOpen={setYearsOpen} />)}
      {YearsOpen && (<Years onClose={setYearsOpen} setOctOpen={setOctOpen} Yearr={Yearr} />)}
      {OctOpen && (<Oct onClose={setOctOpen} setYearsOpen={setYearsOpen} coinOnlyYears={coinOnlyYears} />)}

      {isLeaderboardOpen && (<Leaderboard LeaderboardAnim={LeaderboardAnim} userId={userId} coins={coins} getRandomColor={getRandomColor}/>)}

      {isp2eOpen && <PlayToEarn p2eAnim={p2eAnim} soon={soon} PLANET={PLANET} OctiesCosmo={OctiesCosmo} starship={starship}/>}

      {NFTsOpen && <NFTs NFTsAnim={NFTsAnim} showNotCompleted={showNotCompleted} Nft={Nft} handleCheckReferrals={handleCheckReferrals} buttonVisible={buttonVisible}
      Checknft={Checknft} shapka2={shapka2} dedpool={dedpool} ChecknftDone={ChecknftDone} sendTransaction={sendTransaction}
      rosomaha={rosomaha} ton5={ton5} ton55={ton55} 
      durov={durov} isMint={isMint} alert={alert} setalert={setalert} updatedSpots={updatedSpots}
       />}

      {isFrendsOpen && (<Friends FriendsAnim={FriendsAnim} invite={invite} referralCode={referralCode} telegramLink={telegramLink} getRandomColor={getRandomColor}/>)}

    </div>
     </TonConnectUIProvider>
  );
}

export default App;