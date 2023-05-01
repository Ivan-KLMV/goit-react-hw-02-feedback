import styled from 'styled-components';

export const SectionContainer = styled.section`
  max-width: 800px;
  padding: 20px 50px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;

  &::first-letter {
    text-transform: capitalize;
  }
`;
