import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS} from '../constans';
import {arrToMap} from '../helpers';
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = new Record({
    id: undefined,
    user: undefined,
    text: undefined
});

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action;
    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));

        case LOAD_COMMENTS_FOR_PAGE + START:
            return commentsState.setIn(['pagination', payload.page, 'loading'], true);

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return commentsState
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
                .setIn(['pagination', payload.page, 'loading'], false);

        default:
            return commentsState
    }
}
