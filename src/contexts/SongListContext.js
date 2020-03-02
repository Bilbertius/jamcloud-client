import React, { Component } from 'react';

const SongListContext = React.createContext({
    songList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setSongList: () => {},
    deleteSong: () => {}
});

export default SongListContext;

export class SongListProvider extends Component {
    state = {
        songList: [],
        error: null,
    };

    setSongList = songList =>{
        this.setState({songList})
    };

    setError = error => {
        console.error(error);
        this.setState({error})
    };
    
    clearError = () => {
        this.setState({error: null})
    };
    
    deleteSong = (songID) => {
        let newSongList = this.songList.filter(song => {
            return songID !== song.id
        })
        this.setSongList(newSongList);
        
    };
    
    render() {
        const value = {
            songList: this.state.songList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setSongList: this.setSongList,
            deleteSong: this.deleteSong
        };

        return (
            <SongListContext.Provider value={value}>
                {this.props.children}
            </SongListContext.Provider>
        );
    };
}