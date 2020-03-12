import React from "react";

import "./SongListItem.css";

export default function SongListItem(props) {
  const { song, deleteSong } = props;
  return (
    <>
      <li className="songListItem">
        <span className="song">{song.song}</span>
      
          <span className="artist">{song.artist}</span>
        

      
            <span className="venue">
              {song.date} @ {song.venue}
            </span>
        <span id="button-span">
          <button id='delete-song' type="button" onClick={() => deleteSong(song.id)}>
            X
          </button>
  
        </span>
      </li>
    </>
  );
}
