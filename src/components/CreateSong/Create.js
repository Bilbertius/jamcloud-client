import React from "react";
import SongsApiService from "../../services/songs-api-service";
import SongListContext from "../../contexts/SongListContext";

class Create extends React.Component {
  static contextType = SongListContext;

  static defaultProps = {
    onSubmitSongSuccess: () => {
      this.history.push("/");
    }
  };

  state = { error: null };

  handleSubmitSong = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { song, artist, album, venue, show_date } = e.target;
    const newSong = { song, artist, album, venue, show_date}
    SongsApiService.postSong({
      song: song.value,
      artist: artist.value,
      album: album.value,
      venue: venue.value,
      show_date: show_date.value
    })
      .then(res => {
    
        song.value = "";
        artist.value = "";
        album.value = "";
        venue.value = "";
        show_date.value = "";
        this.context.addSong(newSong);
        this.props.onSubmitSongSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitSong}>
          <h3>Add Song</h3>
          <div id='input-wrapper'>
            <span>
              <input
                id="song"
                name="song"
                type="text"
                placeholder="Song"
                required
              />
            </span>

            <span>
              <input
                id="artist"
                name="artist"
                type="text"
                placeholder="Artist"
                required
              />
            </span>

            <span>
              <input
                id="album"
                name="album"
                type="text"
                placeholder="Album"
                required
              />
            </span>

            <span>
              <input
                id="venue"
                name="venue"
                type="text"
                placeholder="Venue"
                required
              />
            </span>

            <span>
              <input
                id="show_date"
                name="show_date"
                type="date"
                placeholder="date"
                required
              />
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Create;
