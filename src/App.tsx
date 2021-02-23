import React from 'react';
import ExperienceBar from './components/ExperienceBar';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './styles/styles';

const App: React.FC = () => {
  return (
    <Container>
      <h1>NLW</h1>
      <ExperienceBar />
      <GlobalStyles />
    </Container>
  );
};

export default App;
