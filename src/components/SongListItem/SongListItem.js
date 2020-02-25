import React, { Component } from 'react';
import './SongListItem.css';
import APIService from '../../services/APIService';
import SongContext from '../../contexts/SongListContext';






export default class SongListItem extends Component {
    
    
    static contextType = SongContext;
    
    
    removeSong = () => {
        const songID = this.props.key;
        APIService.deleteSong(songID)
            .then(this.context.song(songID))
            .catch(this.context.setError);
        
    };
    
    render() {
        const {song} = this.props;
        return (
            <>
                <ul className='songlist'>
                    <ul>
                        <li><span className='song'>{song.song}</span></li>
                   
                        <li><span className='artist'>{song.artist}</span></li>
                    </ul>
                    <ul>
                        <li>
                            <span className='venue'>{song.date} @  {song.venue}</span>
                    </li>
                    <button
                        className='delete-button'
                        type='button'
                        onClick={ this.props.removeSong }>
                    
                    >
                    X
                    </button>
                    </ul>
                </ul>
                
            </>
            
            
           
        )
    }
}