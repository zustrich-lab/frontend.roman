import React from 'react';
import '../Css/P2e.css';

const PlayToEarn = () => {

    return (
        <div className='P2E_Window'>
            <iframe 
                src="https://octiesdev.github.io/test_game_v8/" 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
            />
        </div>
    );
}

export default PlayToEarn;