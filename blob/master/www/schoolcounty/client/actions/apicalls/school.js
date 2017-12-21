import axios from 'axios';
export const getStatesRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/states/get-states',
    })
};


export const getLevelsRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/level/get-levels',
    })
};

   

export const getSyllabusRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/syllabus/get-syllabus',
    })
};


export const getInfrastructureRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/infrastructure/get-infrastructure',
    })
};

export const getActivitiesRepo = () => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/activities/get-activities',
    })
};

export const getSchoollistRepo = (filter) => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/school/get-schools',
        params: filter
    })
};

export const getCompareSchoollistRepo = (ids) => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/school/get-schools',
        params: {id: ids}
    })
};

export const getSchoolByIdRepo = (id) => {
    return axios({
        method: 'GET',
        url: 'http://localhost:8000/api/school/get-school',
        params: {'id': id}
    })
};

