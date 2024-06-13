import React from 'react';
import './ref.css'
import Icon from './IMG/N.png';

const Ref = ({onClose}) => {
    return (
        <div className="ref">
            <div className="zagolovok">
                <p>Referrals</p>
            </div>

            <div className="SendBorder">
                <div className='SendInfo'>
                    <p>Invite Friend</p>
                </div>
                <div className="sendMenu">
                    <button>
                        Invite
                    </button>
                    <button>       
                        Copy Link
                    </button>
                </div>
            </div>

            <div className="FrandsBorder">
                <div className='FrendsInfo'>
                    <p>My Friends</p>
                </div>
                <div className="FrendsMenu">

                    <div className='Frends'>
                        <div className='FrendsAvatar'>
                            <img src={Icon} alt="Icon"/>
                        </div>
                        <p>Megatron</p>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsAvatar'>
                            <img src={Icon} alt="Icon"/>
                        </div>
                        <p>Papa Karlo</p>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsAvatar'>
                            <img src={Icon} alt="Icon"/>
                        </div>
                        <p>Anonimus</p>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsAvatar'>
                            <img src={Icon} alt="Icon"/>
                        </div>
                        <p>Kardibalet</p>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsAvatar'>
                            <img src={Icon} alt="Icon"/>
                        </div>
                        <p>Severnaia zvezda</p>
                    </div>
                </div>
            </div>
            <div className="zagolovok">
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default Ref;