import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constans';
import {arrToMap} from '../helpers';

export default (commentsState = arrToMap(defaultComments), action) => {
    const {type, payload, randomId} = action;
    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment};

        default:
            return commentsState
    }
}
