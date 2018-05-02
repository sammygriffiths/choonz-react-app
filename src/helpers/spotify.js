import axios from 'axios';

let spotify = {};

spotify.search = (term) => {
    axios.get('https://api.spotify.com/v1/search?q=' + term +'&type=album')
        .then((res) => {
            console.log(res);
        })
};

export default spotify;