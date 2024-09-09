import React from 'react';
import '../Css/P2e.css';
import soon from '../IMG/ComingSoon/Text_soon.png';


const PlayToEarn = ({p2eAnim}) => {

  return (
    <div className={`P2E_Window ${p2eAnim ? 'fade-out' : ''}`}>
      <img src={soon}></img>
    </div>

);
};

export default PlayToEarn;
