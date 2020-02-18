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
        song: [],
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
            song: this.state.song,
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