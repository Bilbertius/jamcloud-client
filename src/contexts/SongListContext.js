import React, { Component } from "react";
import SongsApiService from "../services/songs-api-service";

const SongListContext = React.createContext({
  songList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  addSong: () => {},
  setSongList: () => {},
  deleteSong: () => {}
});

export default SongListContext;

export class SongListProvider extends Component {
  state = {
    songList: [],
    error: null
  }
  
  componentDidMount() {
    SongsApiService.getSongs()
        .then(songList => this.setState({ songList : [...songList] }));
  }

  setSongList = songList => {
    this.setState({ songList });
  };

  setError = error => {
   
    this.setState({ error: error });
  };

  clearError = () => {
    this.setError({ error: null });
  };

  addSong = newSong => {
    const newSongList = [newSong, ...this.state.songList];
    this.setSongList(newSongList);
    this.componentDidMount();
  };
  deleteSong = song_id => {
    SongsApiService.deleteSong(song_id);
    const newSongList = this.state.songList.filter(song => song.id !== song_id)
    this.setSongList(newSongList);
  };

  render() {
    const value = {
      songList: this.state.songList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSongList: this.setSongList,
      addSong: this.addSong,
      deleteSong: this.deleteSong
    };

    return (
      <SongListContext.Provider value={value}>
        {this.props.children}
      </SongListContext.Provider>
    );
  }
}
