import React, { useState, useEffect } from 'react';
import '../Css/App.css';

import avatar from '../IMG/Avatars/avatar.png';
import ink from '../IMG/ink.png';

import earnIcon from '../IMG/earn.png';

import ProgressBar from './ProgressBar';
import Shop from './shop';
import Coindiv from './coin';
import Ref from './ref';
import Earn from './earn';
import MysteryBox from './Mystery_Box';
import Loot from './loot'

import MainLogo   from '../IMG/All_Logo/mainLogo.png';
import InviteLogo from '../IMG/All_Logo/inviteLogo.png';
import ShopLogo   from '../IMG/All_Logo/shopLogo.png';
import LootLogo   from '../IMG/All_Logo/lootLogo.png';
import EarnLogo   from '../IMG/All_Logo/earnLogo.png';
import CraftLogo  from '../IMG/All_Logo/craftLogo.png';
import Logo       from '../IMG/All_Logo/bitclifLogo.png';
import inviteIcon from '../IMG/LowerIcon/Invite_Icon.png';
import lootIcon   from '../IMG/LowerIcon/Loot_Icon.png';
import p2eIcon    from '../IMG/LowerIcon/P2E_Icon.png';
import shopIcon   from '../IMG/LowerIcon/Shop_Icon.png';

function App() {

  const [clicks, setClicks] = useState(0);
  const [energyNow, setEnergyNow] = useState(100);

  const coinPerClick = 1;
  const clickLimit = 100;
  const time= 2000;

  const [isClosingAppForAnim, setClosingAppForAnim] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isRefOpen, setIsRefOpen] = useState(false);
  const [isEarnOpen, setIsEarnOpen] = useState(false);
  const [isBoxOpen, setisBoxOpen] = useState(false);
  const [isLootOpen, setisLootOpen] = useState(false);

  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isInviteLogoVisible, setisInviteLogoVisible] = useState(false);
  const [isEarnLogoVisible, setisEarnLogoVisible] = useState(false);
  const [isShopLogoVisible, setisShopLogoVisible] = useState(false);
  const [isLootLogoVisible, setisLootLogoVisible] = useState(false);
  const [isCraftLogoVisible, setisCraftLogoVisible] = useState(false);


  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);


  //Нажатие на монету
  const handleCoinClick = () => {
    if (energyNow >= coinPerClick) {
      setClicks(clicks + 1);
      setEnergyNow(energyNow - coinPerClick);     
    }
  };

  //Востановления енергиї
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyNow((energyNow) => {
        if (energyNow < clickLimit) {
          return energyNow + 1;
        } else {
          return energyNow;
        }
      });
    }, time);

    return () => clearInterval(interval);
  }, [clickLimit, time]);

  
  const handleCloseAppAnim = () => {setClosingAppForAnim(true);};
  const handleOpenAppAnim = () => {setClosingAppForAnim(false);};

  const handleCloseBox = () => {setisBoxOpen(false)};
  const handleOpenBox = () => {setisBoxOpen(true)};

  const handleOpenShop = () => {
    setIsShopOpen(true);
    setisShopLogoVisible(true);
    setIsLogoVisible(false);
    handleCloseAppAnim();
  };

  const handleCloseShop = () => {
    setisShopLogoVisible(false);
    setIsLogoVisible(true);
    handleOpenAppAnim();
    setTimeout(() => { setIsShopOpen(false); }, 150);
  };

  const handleOpenRef = () => {
    setIsRefOpen(true);
    setisInviteLogoVisible(true);
    setIsLogoVisible(false);
    handleCloseAppAnim();
  };

  const handleCloseRef = () => {
    setisInviteLogoVisible(false);
    setIsLogoVisible(true);
    handleOpenAppAnim();
    setTimeout(() => { setIsRefOpen(false); }, 150);
  };

  const handleOpenEarn = () => {
    setIsEarnOpen(true);
    setisEarnLogoVisible(true);
    setIsLogoVisible(false);
    handleCloseAppAnim();
  };

  const handleCloseEarn = () => {
    setIsLogoVisible(true);
    setisEarnLogoVisible(false);
    handleOpenAppAnim();
    setTimeout(() => { setIsEarnOpen(false); }, 150);
  };

  const handleOpenLoot = () => {
    setisLootLogoVisible(true);
    setIsLogoVisible(false);
    setisLootOpen(true);
    handleCloseAppAnim();
  };

  const handleCloseLoot = () => {
    setisLootLogoVisible(false);
    setIsLogoVisible(true);
    handleOpenAppAnim();
    setisCraftLogoVisible(false);
    setTimeout(() => { setisLootOpen(false); }, 150);
  };

  const handleCheckboxChange = (event) => {
    const LogoVisible = !event.target.checked;
    setisLootLogoVisible(LogoVisible); 
    setisCraftLogoVisible(!LogoVisible); 
  };

  return (
      <div className="App">
        <div className = "info">
          <img src={Logo} alt="Logo" height={"55%"}/>
          <p> NAME </p>
          <img id="pngavatar"src={avatar} alt="Bifclif" height={"70%"}/>
        </div>
        <div className="logo">

          <img  src={MainLogo}
                alt="MainLogo"
                height={"95%"}
                className={isLogoVisible ? 'fade-in' : 'fade-out'}/>

          <img  src={InviteLogo}
                alt="InviteLogo"
                height={"85%"}
                className={isInviteLogoVisible ? 'fade-in' : 'fade-out'}/>

          <img  src={EarnLogo} 
                alt="EarnLogo"
                height={"85%"}
                className={isEarnLogoVisible ? 'fade-in' : 'fade-out'}/>

          <img  src={ShopLogo}
                alt="ShopLogo"
                height={"85%"}
                className={isShopLogoVisible ? 'fade-in' : 'fade-out'}/>

          <img  src={LootLogo}
                alt="LootLogo"
                height={"85%"}
                className={isLootLogoVisible ? 'fade-in' : 'fade-out'}/>

          <img  src={CraftLogo}
                alt="CraftLogo"
                height={"90%"}
                className={isCraftLogoVisible ? 'fade-in' : 'fade-out'}/>

        </div>
        <div className='BackGround_Div'></div>
        <div className={`main ${isClosingAppForAnim ? 'closing' : ''}`}>
          <div className="mainInfo">
            <div className="BorderMainInfo">
              <div id="left_thriple" className="tripleBox">
                <p>LVL.1</p>
                <p id="nonBold"> <img src={ink} alt='ink'/> {clicks}/300</p>
              </div>
              <div className="tripleBox">
                <p>EARN</p>
                <p id="nonBold">4/255</p>
              </div>
              <div id="right_thriple" className="tripleBox">
                <p>ITEMS</p>
                <p id="nonBold">6/255</p>
                <div className="important">
                  <p>important</p>
                </div>
              </div>
            </div>
          </div>
          <Coindiv onClick={handleCoinClick} coinPerClick={coinPerClick} energyNow={energyNow}/>
          <div className="Progress">
            <div className="userStatus">
              <p>Beginner &gt; </p>
            </div>
            <ProgressBar current={energyNow} max={clickLimit} />
            <div className="energy">
              <img src={ink} alt='ink' height={"70%"}/>
              <p id="odstup">{energyNow}/{clickLimit}</p>
              <img onClick={handleOpenEarn} id="kalendar" src={earnIcon} alt='earnIcon' height={"65%"}/>
              <p onClick={handleOpenEarn}>EARN</p>
            </div>
          </div>        
          <div className = "lower">

            <div className="lowerDown">
                <div className='BTN' onClick={handleOpenShop}>
                  <div className="BTNLOW">
                    <img src={shopIcon} height={"90%"} alt='shopIcon'/>       
                  </div>
                  <p>SHOP</p>
                </div>
                <div className='BTN' onClick={handleOpenRef}>
                  <div className="BTNLOW">
                    <img src={inviteIcon} height={"115%"} alt='inviteIcon'/>   
                  </div>
                  <p>INVITE</p>
                </div>
                <div className='BTN'>
                  <div  className="BTNLOW" onClick={handleOpenLoot}>
                    <img src={lootIcon} height={"90%"} alt='lootIcon'/>
                  </div>
                  <p>LOOT</p>
                </div>
                <div className='BTN'>
                  <div  className="BTNLOW">
                    <img src={p2eIcon} height={"90%"} alt='p2eIcon'/>
                  </div>
                  <p>P2E</p>
                </div>
            </div>
          </div>
        </div>

        {isBoxOpen && (
            <MysteryBox
              onClose={handleCloseBox}
            />
        )}

        {isShopOpen && (
          <Shop        
              onClose={handleCloseShop}
          />
        )}

        {isRefOpen && (
          <Ref
              onClose={handleCloseRef}
              openBox={handleOpenBox}
          />
        )}

        {isEarnOpen && (
          <Earn
              onClose={handleCloseEarn}
          />
        )}

        {isLootOpen && (
          <Loot
              onClose={handleCloseLoot}
              handleCheckboxChange={handleCheckboxChange}
          />
        )}

      </div>
  );
}
export default App;