import React, { useState, useEffect } from 'react';
import '../Css/Friends.css'
import axios from 'axios';

const Friends = ({FriendsAnim, invite, referralCode, telegramLink }) => {

    const [referredUsers, setReferredUsers] = useState([]);
    const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';

    useEffect(() => {
        const fetchReferredUsers = async () => {
            try {
                const response = await axios.post(`${REACT_APP_BACKEND_URL}/get-referred-users`, { referralCode });
                setReferredUsers(response.data.referredUsers);
            } catch (error) {
                console.error('Ошибка при получении данных о рефералах:', error);
            }
        };

        fetchReferredUsers();
    }, [referralCode]);

    const handleShareLink = () => {
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(telegramLink)}&text=${encodeURIComponent('Присоединяйся к нашему приложению и получай бонусы!')}`;
        window.open(telegramUrl, '_blank');
    };

    return (
        <div className={`Fr_Window ${FriendsAnim? 'fade-out' : ''}`}>
            <div className='Fr_Info'>
                <p>Invite friends <br/> and get more OCTIES</p>
            </div>
            <div className='Fr_Main'>
                <img src={invite} alt='invite'/>
            </div>
            <div className='Fr_InviteBtn'>
                <div className='BTNInvete' onClick={handleShareLink}>
                    <p>Invite friends</p>
                    <p id='Fr_dark'>+10% of your <br/>friend’s age</p>
                </div>
            </div>

            <div className='Fr_Friends'>
                <p>{referredUsers.length} friends</p>
            </div>

            <div className='Fr_list'>
                {referredUsers.map((user, index) => (
                    <div key={index} className='Fr_Frend'>
                        <div className='FrPhoto'>
                            <p id='txt'>{user.nickname}</p>
                        </div>
                        <div className='FrPhoto'>
                            <p>+{user.earnedCoins} OCTIES</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Friends;