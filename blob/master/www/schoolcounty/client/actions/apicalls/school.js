import axios from 'axios';

const BASE_URL = 'http://schoolcountyapi.com/';

export const getStatesRepo = () => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/states/get-states',
    })
};


export const getLevelsRepo = () => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/level/get-levels',
    })
};

   

export const getSyllabusRepo = () => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/syllabus/get-syllabus',
    })
};


export const getInfrastructureRepo = () => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/infrastructure/get-infrastructure',
    })
};

export const getActivitiesRepo = () => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/activities/get-activities',
    })
};

export const getSchoollistRepo = (filter) => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/school/get-schools',
        params: filter
    })
};

export const getCompareSchoollistRepo = (ids) => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/school/get-schools',
        params: {id: ids}
    })
};

export const getSchoolByIdRepo = (id) => {
    return axios({
        method: 'GET',
        url: BASE_URL+'/api/school/get-school',
        params: {'id': id}
    })
};

