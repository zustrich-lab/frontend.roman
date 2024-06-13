import React from 'react';
import './shop.css';

const Shop = ({ coins, onClose, 
                onUpgrade, coinPerClick, upgradeLevel, upgradeCost, 
                onUpgradeEnergy, clickLimit, upgradeLevelEnergy, upgradeCostEnergy,
                onUpgradeEnergyTime, valEnergyTime, upgradeEnergyTimeLevel, upgradeCostEnergyTime  }) => {
  return (
      <div className="shop">
        <div class="zagolovok">
        <p>Shop</p>
        </div>
        <div className="section">
          <div className='hz'>
            <p>Coin Per Tap</p>
          </div>
          <div className="section-menu">
              <div className="shopMainInfo">
                <div className="inform">
                  <p>{coinPerClick}</p>
                </div>
                <div className="inform">
                  <p>LVL: {upgradeLevel}</p>
                </div>
                <div className="inform">
                  <p>Price: {upgradeCost}</p>
                </div>
              </div>
            <button onClick={onUpgrade} disabled={coins < upgradeCost}>
              Upgrade
            </button>
          </div>
        </div>

        <div className="section">
          <div className='hz'>
            <p>Energy</p>
          </div>
          <div className="section-menu">
            <div className="shopMainInfo">
              <div className="inform">
                <p>{clickLimit}</p>
              </div>
              <div className="inform">
                <p>LVL: {upgradeLevelEnergy}</p>
              </div>
              <div className="inform">
                <p>Price: {upgradeCostEnergy}</p>
              </div>
            </div>
            <button onClick={onUpgradeEnergy} disabled={coins < upgradeCostEnergy}>
              Upgrade
            </button>
          </div>
        </div>

        <div className="section">
          <div className='hz'>
            <p>Energy Recovery</p>
          </div>
          <div className="section-menu">
            <div className="shopMainInfo">
              <div className="inform">
                <p>{valEnergyTime}</p>
              </div>
              <div className="inform">
                <p>LVL: {upgradeEnergyTimeLevel}</p>
              </div>
              <div className="inform">
                <p>Price: {upgradeCostEnergyTime}</p>
              </div>
            </div>
            <button onClick={onUpgradeEnergyTime} disabled={coins <upgradeCostEnergyTime}>
              Upgrade
            </button>
          </div>
        </div>
        <div class="zagolovok">
        <button onClick={onClose} className="close-button">Close</button>
        </div>
      </div>
  );
};

export default Shop;
