import reqwest from 'reqwest';
import { getMedia } from '../utils';
import * as constants from '../constants';

const statusChange = (status) => ({
  type: constants.UPDATE_STATUS,
  status
});

const getSearchResult = ({ results }) => ({
  type: constants.DISPATCH_SEARCH,
  results
});

const clearResult = () => ({
  type: constants.CLEAR_RESULTS
});

export const search = ({ query, media }) => dispatch => {
  dispatch(statusChange(constants.LOADING));
  dispatch(clearResult());
  reqwest({
    type: 'jsonp',
    url: `https://itunes.apple.com/search?media=${getMedia(media || 'all')}&term=${query.split(' ').join('+')}`
  })
    .then(response => {
      if (!!response.results.length) {
        dispatch(getSearchResult(response));
      } else {
        dispatch(statusChange(constants.NOCONTENT));
      }
    })
    .catch(err => dispatch(statusChange(constants.ERROR)));
};
