import React, { PropTypes } from 'react';
import Item from './Item';

const List = ({ results }) => (
  <div className="ui link cards">
    {results.map((item, index) => <Item key={index} {...item} />)}
  </div>
);

List.propTypes = {
  results: PropTypes.array
};

export default List;
