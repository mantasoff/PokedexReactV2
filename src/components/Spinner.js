import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (<div className="spinner ui segment">
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{props.text}</div>
    </div>
    <p></p>
  </div>);
}

Spinner.defaultProps = {
  text: 'Loading...'
};

export default Spinner;