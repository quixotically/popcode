import {createAction} from 'redux-actions';

export default createAction(
  'APPLICATION_LOADED',
  (gistId = null) => ({gistId}),
);
