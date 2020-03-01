import React, { Component } from 'react';
import SongsApiService from '../../services/songs-api-service';
import './SongListItem.css';

export default class SongListItem extends Component {
    static defaultProps = {
        onDeleteSong: () => {
            window.location.push('/')
        }
    }


    handleClickDelete(event) {
        const songID = event.target.id;
        SongsApiService.deleteSong(songID)
            .then(() => {
                this.context.deleteSong(songID);
                this.props.onDeleteSong(songID);
        })
 }


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
                        <span className='venue'>{song.date} @ {song.venue}</span>
                    </li>
                </ul>
                <button className='delete-button' id={song.id} type='button' onClick={this.handleClickDelete}>X</button>
            </ul>
        </>
    )}
}
