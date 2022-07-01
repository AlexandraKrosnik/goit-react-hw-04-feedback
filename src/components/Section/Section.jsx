import { FeedbackTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      {!!title && <FeedbackTitle>{title}</FeedbackTitle>}
      {!!children && children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
