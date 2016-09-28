import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Message from '../components/Message';
import '../style/index.css';
import {
  START,
  LOADING,
  NOCONTENT,
  ERROR
} from '../constants';

const msgMap = {
  [START]: {
    headerMsg: 'Welcome back!',
    iconColor: 'black',
    icon: 'help',
    bodyMsg: 'Please use enter to start search!'
  },
  [LOADING]: {
    headerMsg: 'Just one second',
    iconColor: 'blue',
    icon: 'notched circle loading',
    bodyMsg: 'Fetching data......'
  },
  [NOCONTENT]: {
    headerMsg: 'No search results',
    iconColor: 'yellow',
    icon: 'warning',
    bodyMsg: 'There is no data.'
  },
  [ERROR]: {
    headerMsg: 'Error',
    iconColor: 'red',
    icon: 'warning sign',
    bodyMsg: 'We\'re sorry please try again later.'
  }
};

const Container = ({ status, results }) => (
  <div className="container-wrapper">
    {!!results.length
      ? <List results={results} />
      : <Message {...msgMap[status]} />}
  </div>
);

export default connect(({ data: { status, results } }) => ({
  status,
  results
}))(Container);
