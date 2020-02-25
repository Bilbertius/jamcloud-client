import React, { Component } from 'react';

import './SongListItem.css';
import APIService from '../../services/APIService';
import SongListContext from '../../contexts/SongListContext';






export default class SongListItem extends Component {
    
    
    static contextType = SongListContext;
    
    
    handleClickDelete = () => {
        const songID = this.props.key;
        APIService.deleteSong(songID)
            .then(this.context.deleteSong(songID))
        
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
                        onClick={ this.handleClickDelete }>
                    
                    >
                    X
                    </button>
                    </ul>
                </ul>
                
            </>
            
            
           
        )
    }
}