import React, { useState, useEffect } from 'react';
// import './cpb.css';

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 0) {
          return 60;
        } else {
          return prevProgress - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const normalizedProgress = (progress / 60) * 100;

  return (
    <div className="circular-progress-bar">
      <div className="progress-text" style={{
        color:'#3DC6C1',
        padding:'6px',
        border: '3px solid #3DC6C1',
        borderRadius:'100%'
        
    }}>{progress}</div>
    </div>
  );
};

export default CircularProgressBar;
