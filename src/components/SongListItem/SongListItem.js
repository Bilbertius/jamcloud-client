import React, { Component } from 'react';
import SongsApiService from '../../services/songs-api-service';
import propTypes from 'prop-types';
import './SongListItem.css';
import SongListContext from '../../contexts/SongListContext';

export default class SongListItem extends Component {
    static contextType = SongListContext;
    static defaultProps = {
        onDeleteSong: () => {}
        
    };
    
    state = {
        error: null,
        class: 'songlist'
    }


    handleClickDelete(event) {

        const songID = event.target.id;
  
        this.context.deleteSong(songID);
      
        this.setState({class: 'delete'})
        SongsApiService.deleteSong(songID)
            .then((res) => {
                
                this.props.onDeleteSong();
               
               
        })
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
                    <button className='delete-button' id={song.id} type='button' onClick={() => this.handleClickDelete}>X</button>
                </ul>
            </>
        )}
}

