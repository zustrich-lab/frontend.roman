import React from 'react';
import FastImage from 'react-native-fast-image';
import '../Css/P2e.css';

const PlayToEarn = ({soon, PLANET, OctiesCosmo, starship}) => {

  return (
    <div className='P2E_Window' >
      <div class="background-container">
        <div class="clouds"></div>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div>
      <FastImage
        source={{ uri: soon }}
        style={{ height: '14%', top: '18%' }}
        resizeMode={FastImage.resizeMode.contain}
        id="soontext"
      />
      <FastImage
        source={{ uri: OctiesCosmo }}
        style={{ height: '70%', bottom: 0 }}
        resizeMode={FastImage.resizeMode.contain}
        id="cosmo"
      />
      <FastImage
        source={{ uri: starship }}
        style={{ height: '35%', right: '60%', top: '-8%', transform: [{ rotate: '-10deg' }] }}
        resizeMode={FastImage.resizeMode.contain}
        id="starship"
      />
      <FastImage
        source={{ uri: PLANET }}
        style={{ left: '-20%', height: '100%', width: 'auto' }}
        resizeMode={FastImage.resizeMode.contain}
        id="planet"
      />
    </div>
  );
};

export default PlayToEarn;
