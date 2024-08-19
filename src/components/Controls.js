import React from 'react';
import './Controls.css';

const Controls = ({ isPlaying, onPlayPauseClick, onNextClick, onPrevClick }) => {
  return (
    <div className="controls-container">
      <button className="control-btn" onClick={onPrevClick}>
        <i className="fas fa-backward"></i>
      </button>
      <button className="control-btn play-pause-btn" onClick={onPlayPauseClick}>
        {isPlaying ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
      <button className="control-btn" onClick={onNextClick}>
        <i className="fas fa-forward"></i>
      </button>
    </div>
  );
};

export default Controls;
