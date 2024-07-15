import React, { useEffect, useRef, useState } from 'react';
import '../Css/Checking.css';
import V from '../IMG/All_Logo/V.png';

const Check = ({ setCheckOpen , setYearsOpen}) => {
  const [showButton, setShowButton] = useState(false);
  const progressRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const animateProgress = () => {
      progressRefs.current.forEach((ref, index) => {
        setTimeout(() => {
          ref.style.width = '100%';
          setTimeout(() => {
            imageRefs.current[index].classList.remove('grayscale');
            if (index === progressRefs.current.length - 1) {
              setTimeout(() => {
                setShowButton(true);
              }, 100); 
            }
          }, 1500); 
        }, index *500); 
      });
    };
    animateProgress();
  }, []);

  return (
    <div className="First_Window" id="checkwindow">
      <div className='Chk_Info'>
        <p>Checking<br />your account</p>
      </div>
      <div className='Load'>
        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>Account Age Verified</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[0] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[0] = el)}></div>
          </div>
        </div>

        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>Activity Level Analyzed</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[1] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[1] = el)}></div>
          </div>
        </div>

        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>Telegram Premium Checked</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[2] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[2] = el)}></div>
          </div>
        </div>

        <div className='CheckLoad'>
          <div className='CheckUp'>
            <p>OC Status Confirmed</p>
            <img src={V} alt="V" className="grayscale" ref={(el) => (imageRefs.current[3] = el)} />
          </div>
          <div className='CheckDown'>
            <div className='ProgressCheck' ref={(el) => (progressRefs.current[3] = el)}></div>
          </div>
        </div>
      </div>

      <div className={`OrangeBtn ${showButton ? 'visible' : ''}`} id="checkBtn">
        <div className='BtnO' onClick={(event) => { setCheckOpen(false); setYearsOpen(true)}}>
          <p>Continue</p>
        </div>
      </div>
    </div>
  );
};

export default Check;