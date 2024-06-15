import React, { useState, useEffect } from 'react';
import './App.css';
import Icon from './IMG/logo.png';
import avatar from './IMG/avatar.png';
import ink from './IMG/ink.png';
import inviteIcon from './IMG/Invite.png';
import lootIcon from './IMG/loot.png';
import p2eIcon from './IMG/p2e.png';
import shopIcon from './IMG/shop.png';
import earnIcon from './IMG/earn.png';

import ProgressBar from './ProgressBar';
import Shop from './shop';
import Coindiv from './coin';
import Ref from './ref';
import Earn from './earn';

import MainLogo from './IMG/mainLogo.png';
import InviteLogo from './IMG/inviteLogo.png';
import EarnLogo from './IMG/earnLogo.png';

function App() {

  const [clicks, setClicks] = useState(0);
  const [coins, setCoins] = useState(0);

  const [upgradeCost, setUpgradeCost] = useState(10);
  const [upgradeLevel, setUpgradeLevel] = useState(1);
  const [coinPerClick, setCoinPerClick] = useState(1);

  const [upgradeCostEnergy, setUpgradeCostEnergy] = useState(100);
  const [upgradeLevelEnergy, setUpgradeLevelEnergy] = useState(1);
  const [clickLimit, setClickLimit] = useState(100);
  const [energyNow, setEnergyNow] = useState(100);

  const [upgradeCostEnergyTime, setUpgradeCostEnergyTime] = useState(200);
  const [valEnergyTime, setvalEnergyTime] = useState(0.5);
  const [upgradeEnergyTimeLevel, setupgradeEnergyTimeLevel] = useState(1);
  const [time, setTime] = useState(2000);

  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isRefOpen, setIsRefOpen] = useState(false);
  const [isEarnOpen, setIsEarnOpen] = useState(false);

  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isInviteLogoVisible, setisInviteLogoVisible] = useState(false);
  const [isEarnLogoVisible, setisEarnLogoVisible] = useState(false);


  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
    }
  }, []);


  //Нажатие на монету
  const handleCoinClick = () => {
    if (energyNow >= coinPerClick) {
      setCoins(coins + coinPerClick);
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

  //Прокачка монет за тап
  const CoinPerClickUpgrade = () => {
    if (coins >= upgradeCost) {
      setCoins(coins - upgradeCost);
      setCoinPerClick(coinPerClick + 1);
      setUpgradeLevel(upgradeLevel + 1);
      setUpgradeCost(Math.floor(upgradeCost * 1.5));
    }
  };

  //Прокачка лимита енергиї
  const EnergyUpgrade = () => {
    if (coins >= upgradeCostEnergy) {
      setCoins(coins - upgradeCostEnergy);
      setClickLimit(clickLimit * 2);
      setUpgradeLevelEnergy(upgradeLevelEnergy + 1);
      setUpgradeCostEnergy(Math.floor(upgradeCostEnergy * 1.5));
    }
  };

  //Прокачка востановления енергії
  const EnergyTimeUpgrade = () => {
    if (coins >= upgradeCostEnergyTime) {
      setCoins(coins - upgradeCostEnergyTime);
      setvalEnergyTime(valEnergyTime * 2);
      setupgradeEnergyTimeLevel(upgradeEnergyTimeLevel + 1);
      setTime(time / 2);
      setUpgradeCostEnergyTime(Math.floor(upgradeCostEnergyTime * 1.5));
    }
  };

  const handleOpenShop = () => {
    setIsShopOpen(true);
  };

  const handleCloseShop = () => {
    setIsShopOpen(false);
  };

  const handleOpenRef = () => {
    setIsRefOpen(true);
    setisInviteLogoVisible(true);
    setIsLogoVisible(false);
  };

  const handleCloseRef = () => {
    setIsRefOpen(false);
    setisInviteLogoVisible(false);
    setIsLogoVisible(true);
  };

  const handleOpenEarn = () => {
    setIsEarnOpen(true);
    setisEarnLogoVisible(true);
    setIsLogoVisible(false);
  };

  const handleCloseEarn = () => {
    setIsEarnOpen(false);
    setisEarnLogoVisible(false);
    setIsLogoVisible(true);
  };

  return (
      <body>
      <div className="App">
        <div className = "info">
          <img src={Icon} alt="Icon" height={"55%"}/>
          <p> NAME </p>
          <img id="pngavatar"src={avatar} alt="Bifclif" height={"70%"}/>
        </div>
        <div className="logo">

        <img
            src={MainLogo}
            alt="log"
            height={"95%"}
            className={isLogoVisible ? 'fade-in' : 'fade-out'}           
          />

          <img
            src={InviteLogo}
            alt="log"
            height={"85%"}
            className={isInviteLogoVisible ? 'fade-in' : 'fade-out'}           
          />

          <img
            src={EarnLogo}
            alt="log"
            height={"85%"}
            className={isEarnLogoVisible ? 'fade-in' : 'fade-out'}           
          />

        </div>
        <div className = "main">
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

            <div className="lowerUp">
              <div className="lowerGame">
                <img src={p2eIcon} height={"60%"} alt='p2e'/>
                <p>SWITCH TO P2E</p>
              </div>
            </div>

            <div className="lowerDown">
                <div className="BTNLOW"  onClick={handleOpenShop}>
                  <img src={shopIcon} height={"45%"} alt='shopIcon'/>
                 <p>SHOP</p>
                </div>
                <div className="BTNLOW" id="orangeBTN" onClick={handleOpenRef}>
                  <img src={inviteIcon} height={"40%"} alt='inviteIcon'/>
                  <p>INVITE</p>
                </div>
                <div  className="BTNLOW">
                  <img src={lootIcon} height={"65%"} alt='lootIcon'/>
                  <p>LOOT</p>
                </div>
            </div>

          </div>
        </div>
      </div>

      {isShopOpen && (
          <Shop
              coins={coins}
              coinPerClick={coinPerClick}
              upgradeCost={upgradeCost}
              upgradeLevel={upgradeLevel}

              clickLimit={clickLimit}
              upgradeCostEnergy={upgradeCostEnergy}
              upgradeLevelEnergy={upgradeLevelEnergy}

              upgradeCostEnergyTime={upgradeCostEnergyTime}
              valEnergyTime={valEnergyTime}
              upgradeEnergyTimeLevel={upgradeEnergyTimeLevel}

              onClose={handleCloseShop}
              onUpgrade={CoinPerClickUpgrade}
              onUpgradeEnergy={EnergyUpgrade}
              onUpgradeEnergyTime={EnergyTimeUpgrade}
          />
      )}

      {isRefOpen && (
          <Ref
              onClose={handleCloseRef}
          />
      )}

      {isEarnOpen && (
          <Earn
              onClose={handleCloseEarn}
          />
      )}

      </body>
  );
}
export default App;