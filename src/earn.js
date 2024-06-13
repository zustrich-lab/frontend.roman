import React from 'react';
import './earn.css'


const Earn = ({onClose}) => {
    return (
        <div className="earn">
            <div className="zagolovok">
                <p>Rewards</p>
            </div>

            <div className="EarnBorder">
                <div className="EarnMenu">

                    <div className="Zadanie">
                        <div className="zg">
                            <h1>Subscribe on tg-channel</h1>
                        </div>
                        <p>Reward: 10000</p>
                        <button>
                            Subscribe
                        </button>
                        <button>
                            Check
                        </button>
                    </div>

                    <div className="Zadanie">
                        <div className="zg">
                            <h1>Join a Clash Royale clan</h1>
                        </div>
                        <p>Reward: 99000</p>
                        <button>
                            Subscribe
                        </button>
                        <button>
                            Check
                        </button>
                    </div>

                    <div className="Zadanie">
                        <div className="zg">
                            <h1>Subscribe to twitter</h1>
                        </div>
                        <p>Reward: 10000</p>
                        <button>
                            Subscribe
                        </button>
                        <button>
                            Check
                        </button>
                    </div>

                    <div className="Zadanie">
                        <div className="zg">
                            <h1>Subscribe to Discord</h1>
                        </div>
                        <p>Reward: 10000</p>
                        <button>
                            Subscribe
                        </button>
                        <button>
                            Check
                        </button>
                    </div>

                </div>
            </div>
            <div className="zagolovok">
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default Earn;