import _ from 'lodash';
import { TASK_ACTION } from '../actions';

export default function (state = {}, action) {
    
    switch (action.type) {
        case TASK_ACTION.FETCH_TASKS:
            return _.mapKeys(action.payload.data, 'id');
            break;
    
        default:
            break;
    }

    return state;    
    
    
    
    
    
    
    
    
    
    
    
    
    // return [
    //     {
    //         id: 1,
    //         title: 'Create something amazing',
    //         description: 'Build a builder that builds something amazing',
    //         createdBy: 'Claudio Silva',
    //         createdByDepartment: 'Marketing',
    //         status: 'Started',
    //         responsible: 'Lucila Medeiros'
    //     }, {
    //         id: 2,
    //         title: 'Lorem ipsum dolor sit amet consectetur',
    //         description: 'Lorem lorem lorem lorem',
    //         createdBy: 'Lucila Medeiros',
    //         createdByDepartment: 'IT',
    //         status: 'Started',
    //         responsible: 'Claudio Silva'
    //     }
    // ];
}
