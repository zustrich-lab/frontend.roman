import React from 'react';
import '../Css/NFTs.css';

const NFTs = ({NFTsAnim}) => {

  return (
    <div className={`NFTs_Window ${NFTsAnim ? 'fade-out' : ''}`}>
      <p>NFT</p>
    </div>

);
};

export default NFTs;
