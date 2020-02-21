import React, { Component } from 'react';

import './SongListItem.css';





export default class SongListItem extends Component {
    
    
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
                    
                    </ul>
                </ul>
                
            </>
            
            
           
        )
    }
}