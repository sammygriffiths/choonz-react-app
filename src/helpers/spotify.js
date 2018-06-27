import axios from 'axios';

let spotify = {};

spotify.search = (term) => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_SEARCH_URL + '/search?term=' + term)
            .then((res) => {
                resolve(res.data.body);
            })
            .catch(reject)
    });
};

export default spotify;