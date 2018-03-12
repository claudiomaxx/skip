import axios from 'axios';

const BASE_URL = 'http://localhost:3003';

export const TASK_ACTION = {
    FETCH_TASKS : 'FETCH_TASKS',
    CREATE_TASK : 'CREATE_TASK',
    UPDATE_TASK : 'UPDATE_TASK'
};

export const CREATE_DEPARTMENT = 'CREATE_DEPARTMENT';
export const FETCH_DEPARTMENTS = 'FETCH_DEPARTMENTS';
export const DELETE_DEPARTMENTS = 'DELETE_DEPARTMENTS';

export const TASK_STATUS = {
    CREATED: 'Created',
    STARTED: 'Started',
    PAUSED: 'Paused',
    FINISHED: 'Finished'
};

export function fetchTasks(departmentId) {
    const request = axios.get(`${BASE_URL}/tasks`);

    return {
        type: TASK_ACTION.FETCH_TASKS,
        payload: request
    }
}

export function createTask(task, callback) {
    task.status = TASK_STATUS.CREATED;
    const request = axios.post(`${BASE_URL}/tasks`, task).then(response => callback && callback(response));

    return {
        type: TASK_ACTION.CREATE_TASK,
        payload: request
    }
}

export function updateTask(task, callback) {
    const request = axios.put(`${BASE_URL}/tasks/${task.id}`, task).then(() => callback && callback());

    return {
        type: TASK_ACTION.UPDATE_TASK,
        payload: request
    }
}

export function createDepartment(department, callback) {
    const request = axios.post(`${BASE_URL}/departments`, department).then(response => callback && callback(response.data));

    return {
        type: CREATE_DEPARTMENT,
        payload: request
    }
}

export function fetchDepartments() {
    const request = axios.get(`${BASE_URL}/departments`);

    return {
        type: FETCH_DEPARTMENTS,
        payload: request
    }
}

export function deleteDepartment(id, callback) {
    const request = axios.delete(`${BASE_URL}/departments/${id}`).then(response => callback && callback(response.data));

    return {
        type: DELETE_DEPARTMENTS,
        payload: request
    }
}