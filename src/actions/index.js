import * as types from './../constants/ActionTypes';

export function fetchSongId(title) {
  // return function (dispatch) {
  //   const localSongId = v4();
  //   dispatch(requestSong(title, localSongId));
  //   title = title.replace(' ', '_');
  //   return fetch('http://api.musixmatch.com/ws/1.1/track.search?&q_track=' + title + '&page_size=1&s_track_rating=desc&apikey=dccdbcd14f8c0b3b7636e280b4df7b9f').then(
  //     response => response.json(),
  //     error => console.log('An error occurred.', error)
  //   ).then(function(json) {
  //     if (json.message.body.track_list.length > 0) {
  //       const musicMatchId = json.message.body.track_list[0].track.track_id;
  //       const artist = json.message.body.track_list[0].track.artist_name;
  //       const title = json.message.body.track_list[0].track.track_name;
  //       fetchLyrics(title, artist, musicMatchId, localSongId, dispatch);
  //     } else {
  //       console.log('We couldn\'t locate a song under that ID!');
  //     }
  //   });
  // };
}