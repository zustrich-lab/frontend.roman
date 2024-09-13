import React from 'react';
import '../Css/NFTs.css';

import AlertNft from '../Alert/Alert.js';
import {TonConnectButton} from '@tonconnect/ui-react';
import { useTonConnectUI } from '@tonconnect/ui-react';


const NFTs = ({NFTsAnim, showNotCompleted, Nft, handleCheckReferrals, buttonVisible, Checknft, sendTransaction, ChecknftDone ,
  shapka2, dedpool, rosomaha, ton5, ton55, durov, isMint, alert, setalert
}) => {

  const [tonConnectUI] = useTonConnectUI();

  if (!localStorage.getItem('forsent')) {localStorage.setItem('forsent', 'false');}
 
  const timerforsent= localStorage.getItem('forsent') === 'true';
  const Form = "https://forms.gle/6Aj8HmxT7wFkmwFh8";

  const sendTransactionFunc = () => {
    if(buttonVisible  &&  !isMint){
      sendTransaction();
    }
  };

  const Tg_Form_Window = async () => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    window.open(Form, '_blank');
    
    setTimeout(async () => {
      localStorage.setItem('forsent', 'false');
  }, 10000);
  };


  const sendTransaction1 = async () => {
    try {

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
            amount: "1000000", 
          },
        ],
      };
      await tonConnectUI.sendTransaction(transaction);
      localStorage.setItem('forsent', 'true');
    } catch (error) {
      console.error("Error sending transaction:", error);
      localStorage.setItem('forsent', 'false'); 
    }
  };

  return (
    <div className={`NFTs_Window ${NFTsAnim ? 'fade-out' : ''}`}>
      {alert && <AlertNft rosomaha={rosomaha} setalert={setalert}/>}
      <div className='Shapka'>
        <div className='shapkaborder'>
          <p> CREATE AN <span id='highlight'>NFT</span> OF YOUR<br/> CHARACTER OCTIES!</p>
          <img src={ton5} onClick={sendTransaction1} alt=''/>
        </div>
        <img className="marvel" src={dedpool} alt=''/>
        <img className="marvel" id="ros" src={rosomaha} alt=''/>
        <img src={shapka2} id="shapka2" alt=''/>
       
      </div>
     
      <div className='mainNft'> 
        <div className='feikton'>
          <TonConnectButton/>
        </div>

        <div className='nft-promo'>
          <div className='nft-text'>
            <h2>GET YOUR <span id='highlight'>FREE</span> NFT!</h2>
            <p>Invite 15 friends, Connect Wallet <br/>and receive unique OCTIES NFT</p>
            <div className='nft-buttons'>
              <div className="mint-section">

                {!buttonVisible && !showNotCompleted && 
                  <button className="referral-button" onClick={handleCheckReferrals}> 
                    Check referrals
                  </button>}

                {!buttonVisible && showNotCompleted && (
                  <button id="not-completed" >
                    <img src={Checknft} alt="Not completed" />Not completed
                  </button>)}

                {buttonVisible && (
                  <button id="friends-count">
                    <p>15 friends </p>
                    <img src={ChecknftDone} alt="Checkmark" />
                  </button> )}

              </div>
              <div className="mint-section">
              <button
                className={`mint-button ${isMint ? 'greenlight' : (!buttonVisible ? 'canMint' : '')}`}
                onClick={sendTransactionFunc}
              >
                {isMint ? 'MINTED' : 'MINT'}
              </button>

              </div>
            </div>
          </div>
          <div className='nft-image'>
            <img src={Nft} alt='OCTIES NFT' /> 
          </div>
        </div>

        <div className='nft-promo2'>
          <div className='LeftNft2'>
            <h1><span id='highlight'>CREATE AN NFT</span> OF YOUR<br/>CHARACTER OCTIES!</h1>    
            <p>Currently <span id="highgreen">250</span>/250 spots available</p>
            <p>Once you submit the transaction,<br /><span id='highlight'>you will receive:</span></p>
            <ul class="custom-list">
              <li>1 NFT of a unique OCTIES <br/> character, which you <br/> can design yourself</li>
            </ul>
            <ul class="custom-list">
              <li>Utilities (specific ones are <br/>currently unknown)</li>
            </ul>
          
            {!timerforsent && <button className='sendButtonm' onClick={sendTransaction1}>Send transaction <img src={ton55} alt=''/></button>}
            {timerforsent && <button className='FillButtonm' onClick={Tg_Form_Window}>Fill out the form</button>}
             

          </div>
          <div className='rightNft2'>
            <img src={durov} alt=''/>
          </div>
         
        </div>
      </div>
    </div>

);
};

export default NFTs;
