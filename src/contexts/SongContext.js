import React from 'react';

const SongContext = React.createContext({
    song: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setSong: () => {},
    clearSong: () => {},
});

export default SongContext;

export class SongProvider extends React.Component{
    state = {
        jam: {
            song: '',
            artist: '',
            album: '',
            venue: '',
            date: ''
        },
        error: null,
    };

    setError = error => {
        this.setState({ error })
    };
    
    clearError = () => {
        this.setState({ error: null })
    };

    setSong = song =>{
        this.setState({song});
    };

    clearSong = () =>{
        this.setSong([]);
    };

    render(){
        const value = {
            jam: this.state.jam,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setSong: this.setSong,
            clearSong: this.clearSong,
        };

        return(
            <SongContext.Provider value={value}>
                {this.props.children}
            </SongContext.Provider>
        );
    };
}