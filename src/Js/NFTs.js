import React from 'react';
import '../Css/NFTs.css';

import shapka2 from '../IMG/NFTs/Shapka2.png';
import dedpool from '../IMG/NFTs/dedpool.png';
import rosomaha from '../IMG/NFTs/rosomaha.png';
import ton5 from '../IMG/NFTs/5Ton.png';

import {TonConnectButton} from '@tonconnect/ui-react';

const NFTs = ({NFTsAnim, showNotCompleted, Nft, handleCheckReferrals, buttonVisible, Checknft, sendTransaction, ChecknftDone }) => {

  return (
    <div className={`NFTs_Window ${NFTsAnim ? 'fade-out' : ''}`}>
      <div className='Shapka'>
        <div className='shapkaborder'>
          <p> CREATE AN <span id='highlight'>NFT</span> OF YOUR<br/> CHARACTER OCTIES!  </p>
          <img src={ton5} alt=''/>
        </div>
        <img className="marvel" src={dedpool} alt=''/>
        <img className="marvel" id="ros" src={rosomaha} alt=''/>
        <img src={shapka2} id="shapka2" alt=''/>
      </div>
     
    
        <div className='feikton'>
          <TonConnectButton/>
        </div>


        <div className='nft-promo'>
          <div className='nft-text'>
            <h2>GET YOUR <span id='highlight'>FREE</span> NFT!</h2>
            <p>Invite 15 friends, Connect Wallet <br/>and receive unique OCTIES NFT</p>
            <div className='nft-buttons'>
              
                <div className="mint-section">
                  <button className="referral-button" onClick={handleCheckReferrals}> Check referrals</button>
                  {showNotCompleted && (
                  <p id="not-completed">
                    <img src={Checknft} alt="Not completed" />Not completed
                  </p>)}
                  {!buttonVisible && <p id="friends-count">15 friends <img src={ChecknftDone} alt="Checkmark" /></p>  }
                </div>
              
                <div className="mint-section">
                  <button className={`mint-button ${buttonVisible ? 'canMint' : ''}`} onClick={sendTransaction}>Mint</button>
                </div>
             
            </div>
          </div>
          <div className='nft-image'>
            <img src={Nft} alt='OCTIES NFT' /> 
          </div>
        </div>
   
     
    </div>

);
};

export default NFTs;
