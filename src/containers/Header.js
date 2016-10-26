import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import $ from 'jquery';
import 'imports?$=jquery,jQuery=jquery!../../vendor/js/transition';
import 'imports?$=jquery,jQuery=jquery!../../vendor/js/dropdown';

@connect(null, actions)
class Header extends Component {

  state = { media: 'all' };

  componentDidMount() {
    $('.ui.dropdown').dropdown({
      onChange: (media) => {
        this.setState({ media });
        this.state.query && this.dispatchSearch();
      }
    });
  }

  componentWillUnmount() {
    $('.ui.dropdown').dropdown('refresh');
  }

  dispatchSearch = () => this.props.search(this.state);

  _onKeyUp = e => {
    this.setState({ query: e.target.value });
    e.keyCode === 13 && this.dispatchSearch();
  };

  render() {
    return (
      <div className="ui inverted vertical segment center aligned">
        <div className="ui right action left icon input massive">
          <i className="search icon" />
          <input
            onKeyUp={this._onKeyUp}
            type="text"
            placeholder="Search..."
            autoFocus
          />
          <div className="ui dropdown button">
            <div className="text">All</div>
            <i className="dropdown icon" />
            <div className="menu">
              <div className="item">All</div>
              <div className="item">Audiobook</div>
              <div className="item">eBook</div>
              <div className="item">Movie</div>
              <div className="item">Music</div>
              <div className="item">Music Video</div>
              <div className="item">Podcast</div>
              <div className="item">TV Show</div>
              <div className="item">Short Film</div>
              <div className="item">Software</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
