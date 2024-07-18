import React, { useState, useEffect } from 'react';
import '../Css/Friends.css';
import axios from 'axios';

const Friends = ({ FriendsAnim, invite, referralCode, telegramLink }) => {
    const [referredUsers, setReferredUsers] = useState([]);
    const REACT_APP_BACKEND_URL = 'http://82.112.241.13:3001';

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

    // const handleShareLink = () => {
    //     const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(telegramLink)}&text=${encodeURIComponent('Check your rating and receive rewards 🐙')}`;
    //     window.open(telegramUrl, '_blank');
    //     window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    // };

    const handleShareLink = () => {
        const text = "Check your rating and receive rewards 🐙";
        const url = `https://t.me/share/url?url=${encodeURIComponent(telegramLink)}&text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className={`Fr_Window ${FriendsAnim ? 'fade-out' : ''}`}>
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
                    <div key={index} className='Lb_Lider'>
                        <div className='LbPhoto'  
                        style={{ backgroundColor: getRandomColor(),
                            borderRadius: '50%',
                            aspectRatio: '1', 
                            height: '5.5vh', 
                            display: 'flex',
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '20px', 
                            marginRight:'2vh', 
                            color: 'white' }}>
                            <p style={{margin: '0'}}>{user.nickname.slice(0, 2).toUpperCase()}</p>
                        </div>
                        
                        <div className='NameLb'>
                            <p>{user.nickname}</p>
                        </div>

                        <div className='LbPhoto' id='FR_Coins_frend'>
                           
                        <p>+{user.earnedCoins} OCTIES</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Friends;
