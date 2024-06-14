import React from 'react';
import './ref.css'
import boxIcon from './IMG/box.png';
import znakLogo from './IMG/Znak.png';
import s from './IMG/s.png'
import copyLogo from './IMG/copy.png';
import inviteIcon from './IMG/Invite.png';
import FriendAvatar from './IMG/ArturAvatar.png';
import DimaAvatar from './IMG/DimaAvatar.png';
import NazarAvatar from './IMG/NazarAvatar.png';
import AndriiAvatar from './IMG/AndriiAvatar.png';
import IlyaAvatar from './IMG/IlyaAvatar.png';
import BoyarskiiAvatar from './IMG/BoyarskiiAvatar.png';

const Ref = ({onClose}) => {
    return (
        <div className="ref">
            <div className="BoxBorder">
                <div className='Box'>
                    <img src={boxIcon} alt='boxIcon' height={"60%"}/>
                </div>
                <div className='BoxTitle'>
                    <div className='BoxUp'>
                        <p>INVITE A FRIEND</p>
                    </div>
                    <div className='BoxDown'>
                        <div className='BoxLeft'>
                            <img src={znakLogo} alt='znakLogo' height={"50%"}/>
                        </div>
                        <div className='BoxRight'>
                            <p>GET <span className="mysteryBox">MYSTERY BOX</span></p>
                            <p>FOR YOU AND YOUR</p>
                            <p>FRIEND</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="FrandsBorder">
                <div className='FrendsInfo'>
                    <p>LIST OF YOUR FRIENDS</p>
                    <img src={s} alt='s' height={"40%"}/>
                </div>
                <div className="FrendsMenu">

                    <div className='Frends'>
                        <div className='FrendsIcon'>
                            <img src={FriendAvatar} alt='FriendAvatar' height={"65%"}/>
                        </div>
                        <div className='FrendsName'>
                            <p>ARTUR</p>
                            <p id="Friends_rank">Beginner <span id="Beginner_rank"> ● </span></p>
                        </div>
                        <div className='FrendsIcon'>
                            <img src={boxIcon} alt='boxIcon' height={"65%"}/>
                        </div>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsIcon'>
                            <img src={DimaAvatar} alt='DimaAvatar' height={"65%"}/>
                        </div>
                        <div className='FrendsName'>
                            <p>DIMA BAGMET</p>
                            <p id="Friends_rank">Advanced <span id="Advanced_rank"> ● </span></p>
                        </div>
                        <div className='FrendsIcon'>
                            <img src={boxIcon} alt='boxIcon' height={"65%"}/>
                        </div>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsIcon'>
                            <img src={NazarAvatar} alt='NazarAvatar' height={"65%"}/>
                        </div>
                        <div className='FrendsName'>
                            <p>NAZAR</p>
                            <p id="Friends_rank">Intermediate <span id="Intermediate_rank"> ● </span></p>
                        </div>
                        <div className='FrendsIcon'>
                            <img src={boxIcon} alt='boxIcon' height={"65%"}/>
                        </div>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsIcon'>
                            <img src={AndriiAvatar} alt='AndriiAvatar' height={"65%"}/>
                        </div>
                        <div className='FrendsName'>
                            <p>АНДРІЙ</p>
                            <p id="Friends_rank">Expert <span id="Expert_rank"> ● </span></p>
                        </div>
                        <div className='FrendsIcon'>
                            <img src={boxIcon} alt='boxIcon' height={"65%"}/>
                        </div>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsIcon'>
                            <img src={IlyaAvatar} alt='IlyaAvatar' height={"65%"}/>
                        </div>
                        <div className='FrendsName'>
                            <p>ИЛЬЯ</p>
                            <p id="Friends_rank">Master <span id="Master_rank"> ● </span></p>
                        </div>
                        <div className='FrendsIcon'>
                            <img src={boxIcon} alt='boxIcon' height={"65%"}/>
                        </div>
                    </div>

                    <div className='Frends'>
                        <div className='FrendsIcon'>
                            <img src={BoyarskiiAvatar} alt='BoyarskiiAvatar' height={"65%"}/>
                        </div>
                        <div className='FrendsName'>
                            <p>АНДРІЙ</p>
                            <p id="Friends_rank">Advanced <span id="Advanced_rank"> ● </span></p>
                        </div>
                        <div className='FrendsIcon'>
                            <img src={boxIcon} alt='boxIcon' height={"65%"}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="thripleBTN">
                <button onClick={onClose} id='goClose'className="go">X</button>
                <button id='goInvite'className="go">
                    <p>INVITE</p>
                    <img src={inviteIcon} height={"50%"} alt='inviteIcon'/>
                </button>
                <button className="go">
                    <img src={copyLogo} alt='copyLogo' height={"65%"}/>
                </button>
            </div>
        </div>
    );
};

export default Ref;