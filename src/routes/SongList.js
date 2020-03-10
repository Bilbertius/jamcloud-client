import React, { Component } from "react";

import { Section } from "../components/Utils/Utils";
import SongListItem from "../components/SongListItem/SongListItem";
import SongListContext from "../contexts/SongListContext";

export default class SongList extends Component {
  static contextType = SongListContext;

  renderSongs() {
   
    const { songList, deleteSong } = this.context;
    return songList.map(song => (
      <SongListItem
        key={song.id}
        data={song.id}
        song={song}
        deleteSong={() => deleteSong(song.id)}
      />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="SongListPage">
        <ul>
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderSongs()
          )}
        </ul>
      </Section>
    );
  }
}
