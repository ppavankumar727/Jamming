const clientId = 'c49df6ef536c4add80df0a9494c89952';
const client_secret = '031196dc0dca4851b30f40e9480e9676';
let accessToken;
const Spotify = {
    getAccessToken(){
      const url = `https://accounts.spotify.com/api/token`;
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${client_secret}`;
      
      return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      }).then(response => response.json()
      ).then(jsonResponse => {
        accessToken = jsonResponse.access_token;
        let expiresIn = jsonResponse.expires_in;
        if (accessToken && expiresIn) {
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
        }
        return accessToken;
      });
    },
    async search(term) {
      const accessToken = await Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
    },
  
    async savePlaylist(name, trackUris) {
      if (!name || !trackUris.length) {
        return;
      }
  
      const accessToken = await Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      let userId;
  
      return fetch('https://api.spotify.com/v1/me', {headers: headers}
      ).then(response => response.json()
      ).then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: name})
        }).then(response => response.json()
        ).then(jsonResponse => {
          const playlistId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
          });
        });
      });
    }
    
}

export default Spotify;