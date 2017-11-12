import axios from 'axios';
export const getStatesRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://35.154.63.76/api/states/get-states',
    })
};


export const getLevelsRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/level/get-levels',
    })
};