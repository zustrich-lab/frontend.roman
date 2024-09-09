import React from 'react';
import '../Css/P2e.css';

const PlayToEarn = ({p2eAnim}) => {

  return (
    <div className={`P2E_Window ${p2eAnim ? 'fade-out' : ''}`}>
      <p>Coming soon</p>
    </div>

);
};

export default PlayToEarn;
