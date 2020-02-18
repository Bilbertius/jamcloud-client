import React from 'react';
import ApiService from '../services/APIService';
import Songs from './Songs.js';



class SongList extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            songData: []
        }
    }

    componentDidMount() {
        ApiService.getSongs().then(data =>this.setState({songData: data})); 
    }

    render() {
        console.log(this.state.songData); 
        return <Songs data={this.state.songData} />
    }

}

export default SongList;