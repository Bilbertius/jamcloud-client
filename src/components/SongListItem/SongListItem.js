import React, { Component } from 'react';
import SongsApiService from '../../services/songs-api-service';

import './SongListItem.css';
import SongListContext from '../../contexts/SongListContext';

export default class SongListItem extends Component {
    static contextType = SongListContext;
    static defaultProps = {
        onDeleteSong: () => {}
        
    };
    
    state = {
        error: null,
        
    }


    handleClickDelete(event) {

        const song_id = this.props.song.id;
  
        this.context.deleteSong(song_id);
      
        
        SongsApiService.deleteSong(song_id)
            .then((res) => {
                
                this.props.onDeleteSong();
               
               
        });
        this.setState({class: 'deleted'})
    
    }
    


    render() {
        const {song} = this.props;
        return (
            <>
                <ul className={this.state.class}>
                    <ul>
                        <li><span className='song'>{song.song}</span></li>
                        
                        <li><span className='artist'>{song.artist}</span></li>
                    </ul>
                    <ul>
                        <li>
                            <span className='venue'>{song.date} @ {song.venue}</span>
                        </li>
                    </ul>
                    <button className='delete-button' song_id={song.id} type='button' onClick={this.handleClickDelete}>X</button>
                </ul>
            </>
        )}
}

