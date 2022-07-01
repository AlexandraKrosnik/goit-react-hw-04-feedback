import { Component } from 'react';
import { FeedbackTitle } from './Section.styled';
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    let { title, children } = this.props;
    return (
      <>
        {!!title && <FeedbackTitle>{title}</FeedbackTitle>}
        {!!children && children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
