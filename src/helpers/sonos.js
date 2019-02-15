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

sonos.resetRecentlyAdded = () => {
    return new Promise((resolve, reject) => {
        axios.delete(process.env.REACT_APP_QUEUE_URL + '/songs/recently-added')
            .then((res) => {
                resolve(res.data);
            })
            .catch(reject)
    });
};

sonos.clearQueue = () => {
    return new Promise((resolve, reject) => {
        axios.delete(process.env.REACT_APP_QUEUE_URL + '/songs')
            .then((res) => {
                resolve(res.data);
            })
            .catch(reject)
    });
};

export default sonos;