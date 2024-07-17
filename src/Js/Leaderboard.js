import React, { useState, useEffect } from 'react';
import '../Css/Leaderboard.css';
import axios from 'axios';

import logo from '../IMG/All_Logo/LBoard.png';

const REACT_APP_BACKEND_URL = 'https://octiesback-production.up.railway.app';

const Leaderboard = ({ LeaderboardAnim, userId, coins }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [userNickname, setUserNickname] = useState('');

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/user-count`);
        if (response.data.success) {
          setUserCount(response.data.count);
        }
      } catch (error) {
        console.error('Ошибка при получении количества пользователей:', error);
      }
    };

    fetchUserCount();
  }, []);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/leaderboard`);
        if (response.data.success) {
          setLeaderboard(response.data.leaderboard);
        }
      } catch (error) {
        console.error('Ошибка при загрузке лидерборда:', error);
      }
    };
  
    const fetchUserRank = async () => {
      try {
        console.log(`Fetching rank for userId: ${userId}`); // Логирование userId
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/user-rank`, { params: { userId } });
        if (response.data.success) {
          console.log('User rank fetched successfully:', response.data.rank); // Логирование успешного ответа
          setUserRank(response.data.rank);
          setUserNickname(response.data.nickname); // Сохранение ника
        } else {
          console.error('Error in response data:', response.data.message);
        }
      } catch (error) {
        console.error('Ошибка при загрузке позиции пользователя:', error);
      }
    };

    fetchLeaderboard();
    if (userId) {
      fetchUserRank();
    } else {
      console.error('userId не определен');
    }
  }, [userId]);

  const getMedal = (index) => {
    switch (index) {
      case 0:
        return '🥇';
      case 1:
        return '🥈';
      case 2:
        return '🥉';
      default:
        return `#${index + 1}`;
    }
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
    <div className={`Lb_Window ${LeaderboardAnim? 'fade-out' : ''}`}>
      <div className='lb_Info'>
        <p>Telegram Wall of Fame</p>
      </div>
      
      <div className='Lb_Menu'>
        <div className='LbBorder'>
          <div className='Lb_Logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='Lb_Text'>
            <p>🥇The 1st holder will get 400,000 OCTIES</p>
            <p>🥈The 2nd holder will get 250,000 OCTIES</p>
            <p>🥉The 3rd holder will get 100,000 OCTIES</p>
          </div>
        </div>

        <div className='Lb_inside'>
          <div className='LbPhoto'>
            <div 
              style={{
                backgroundColor: getRandomColor(), 
                borderRadius: '50%', 
                aspectRatio: '1', 
                height: '5.5vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2vh',
                margin:'2vh',  
                color: 'white'
              }}>
              {userNickname.slice(0, 2).toUpperCase()}
            </div>
            
            <div className='NameLb'>
              <p>{userNickname ? `${userNickname}` : 'Loading...'}</p>
              <p id='LbColor'>{coins} OCTIES</p>
            </div>
          </div>
          <div className='LbPhoto'>
            <p id="number">{userRank ? `#${userRank}` : '??'}</p>
          </div>
        </div>

        <div className='Lb_Liders'>
          <p>{userCount} holders</p>
        </div>
        <div className='Lb_list'>
          {leaderboard.map((user, index) => (
            <div key={user._id} className='Lb_Lider'>
              <div className='LbPhoto'>
                <div
                  style={{
                    backgroundColor: getRandomColor(), 
                    borderRadius: '50%', 
                    aspectRatio: '1', 
                    height: '5.5vh', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '2.5vh',
                    margin:'2vh', 
                    color: 'white'
                  }}>
                  <p style={{margin: '0'}}>{user.nickname.slice(0, 2).toUpperCase()}</p>
                </div>  
                <div className='NameLb'>
                  <p> {user.nickname} </p>
                  <p id='LbColor'>{user.coins} OCTIES</p>
                </div>
              </div>
              <div className='LbPhoto' id="medal">
                <p>{getMedal(index)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
