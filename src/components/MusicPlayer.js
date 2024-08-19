import React, { useEffect, useState } from "react";
import '../styles/Global.css';

function MusicPlayer() {
    const [songs, setSongs] = useState([]);
  
    useEffect(() => {
      // Fetch the song data from the API
      fetch("https://cms.samespace.com/items/songs")
        .then((response) => response.json())
        .then((data) => {
          // Process the song data
          const processedSongs = data.data.map((song) => ({
            id: song.id,
            title: song.name,
            artist: song.artist,
            coverImage: `https://cms.samespace.com/assets/${song.cover}`,
            url: song.url,
            accent: song.accent,
          }));
  
          // Update the state with the processed songs
          setSongs(processedSongs);
        })
        .catch((error) => console.error("Error fetching song data:", error));
    }, []);
  
    return (
      <div className="music-player">
        {songs.map((song) => (
          <div key={song.id} className="song">
            <img src={song.coverImage} alt={song.title} className="cover-image" />
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <audio controls src={song.url}>
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default MusicPlayer;