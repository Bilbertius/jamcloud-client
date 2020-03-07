import React from 'react';


import './SongListItem.css';


export default function SongListItem(props) {
    
    
    
        
        return (
            <>
                <ul className='songlist'>
                    <ul>
                        <li><span className='song'>{props.song.song}</span></li>
                        
                        <li><span className='artist'>{props.song.artist}</span></li>
                    </ul>
                    <ul>
                        <li>
                            <span className='venue'>{props.song.date} @ {props.song.venue}</span>
                        </li>
                        
                    </ul>
                </ul>
            </>
        )
};

