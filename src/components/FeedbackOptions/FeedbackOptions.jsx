import { OptionList, FeedbackItem } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onFeedbackLeave }) => {
  return (
    <OptionList>
      {options.map(option => {
        return (
          <FeedbackItem
            key={option}
            type="button"
            name={option}
            onClick={onFeedbackLeave}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </FeedbackItem>
        );
      })}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackLeave: PropTypes.func.isRequired,
};
