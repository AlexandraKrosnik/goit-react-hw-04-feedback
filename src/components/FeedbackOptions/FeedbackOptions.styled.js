import styled from 'styled-components';

export const OptionList = styled.div`
  display: flex;
`;

export const FeedbackItem = styled.button`
  width: 70px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
