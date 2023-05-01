import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(key => (
        <li key={key}>
          <Button type="button" onClick={onLeaveFeedback}>
            {key}
          </Button>
        </li>
      ))}
    </ButtonList>
  );
};
