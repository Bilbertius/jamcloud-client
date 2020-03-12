import React, { Component } from "react";

import { Section } from "../components/Utils/Utils";
import SongListItem from "../components/SongListItem/SongListItem";
import SongListContext from "../contexts/SongListContext";

export default class SongList extends Component {
  static contextType = SongListContext;

  state = {
    isLoading: false,
    songList: this.context.songList
  }
  
  /*
    renderSongs() {
    const { songList, deleteSong } = this.context;
    return songList.map(song => (
      <SongListItem
        key={song.id}
        data={song.id}
        song={song}
        deleteSong={() => deleteSong(song.id)}
      />
    ));
  }
*/
  
  render() {
    const { songList, deleteSong, error } = this.context;
    return (
        <Section className='SongListPage'>
          {error ? <p>{error.message}</p> : null}
        <ul>
          {songList.map(song => (
              <SongListItem
                key={song.id}
                song={song}
                deleteSong={() => deleteSong(song.id)}
              />
          ))}
        </ul>
        </Section>
            
            
    );
  }
}
