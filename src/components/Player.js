import React, { useState, useEffect, useRef } from 'react';

import '../styles/Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';


const Player = ({ songs, currentSong, currentSongIndex, setCurrentSongIndex }) => {
const [isPlaying, setIsPlaying] = useState(false);
const [volume, setVolume] = useState(0.5); // Default volume level is 50%
const [showVolumeSlider, setShowVolumeSlider] = useState(false);
const audioRef = useRef(null);




useEffect(() => {
  const audio = audioRef.current; // Capture the audio ref
  if (isPlaying && audio) {
    audio.play();
  } else if (audio) {
    audio.pause();
  }

  return () => {
    // Cleanup: Pause the audio when the component unmounts
    if (audio) {
      audio.pause();
    }
  };
}, [isPlaying, currentSong]);

useEffect(() => {
  const audio = audioRef.current;
  if (audio) {
    audio.volume = volume;
  }
}, [volume]);

useEffect(() => {
  const audio = audioRef.current;
  return () => {
    if (audio) {
      audio.pause();
    }
  };
}, []);

  
  
  useEffect(() => {
    if (currentSong) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = `https://cms.samespace.com/assets/${currentSong.cover}`;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
        let r = 0, g = 0, b = 0, count = 0;

        for (let i = 0; i < imageData.length; i += 4) {
          r += imageData[i];
          g += imageData[i + 1];
          b += imageData[i + 2];
          count++;
        }

        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      };
    }
  }, [currentSong]);


  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handleSeek = (event) => {
    if (audioRef.current) {
      const seekTime = (event.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
    }
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value / 100);
  };


  return (
    <div className="player-container">
      {currentSong && (
        <>
          <div className="song-details">
            
            <div className="song-info">
              <h4>{currentSong.name}</h4>
              <p>{currentSong.artist}</p>
            </div>
            <img
              src={`https://cms.samespace.com/assets/${currentSong.cover}`}
              alt={`${currentSong.name} cover`}
              className="cover-image"
            />
          </div>
          <input
            type="range"
            className="seeker"
            min="0"
            max="100"
            onChange={handleSeek}
          />
          <audio
            ref={audioRef}
            src={currentSong.url}
            onEnded={handleNext}
          ></audio>
          <div className="controls">
            <button onClick={handlePrevious}><FontAwesomeIcon icon={faBackward} /></button>
            <button onClick={handlePlayPause}>
              {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <button onClick={handleNext}><FontAwesomeIcon icon={faForward} /></button>
            <div className="volume-control-container">
              <button onClick={toggleVolumeSlider}>
                {volume > 0 ? (
                  <FontAwesomeIcon icon={faVolumeUp} />
                ) : (
                  <FontAwesomeIcon icon={faVolumeMute} />
                )}
              </button>
              {showVolumeSlider && (
                <input
                  type="range"
                  className="volume-slider"
                  min="0"
                  max="100"
                  value={volume * 100}
                  onChange={handleVolumeChange}
                  orientation="vertical"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
