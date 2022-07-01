import { Component } from 'react';
import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    let { message } = this.props;
    return <Message>{message}</Message>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
