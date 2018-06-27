import axios from 'axios';

let sonos = {};

sonos.add = (spotifyId) => {
    return new Promise((resolve, reject) => {
        axios.post(process.env.REACT_APP_QUEUE_URL + '/songs', { spotify_id: spotifyId })
            .then((res) => {
                resolve(res.data);
            })
            .catch(reject)
    });
};

export default sonos;