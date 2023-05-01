import { StatList, StatText } from './Statistics.styled';

export const Statistics = ({
  namesOfItem,
  value,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatList>
        {namesOfItem.map(name => (
          <li key={name}>
            {name}:<span>{value[name]}</span>
          </li>
        ))}
      </StatList>
      <StatText>
        total:<span>{total}</span>
      </StatText>
      <StatText>
        positive feedback:
        <span>{!positivePercentage ? 0 : positivePercentage}</span>%
      </StatText>
    </>
  );
};
