/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Flip, toast, ToastContainer } from 'react-toastify';
import SearchIcon from '@material-ui/icons/Search';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { lightTheme, darkTheme } from './style/theme';
import { Form } from './components/form';
import { StyledButton } from './components/button';
import { StyledInput } from './components/input';
import { Title } from './components/title';
import { Results } from './components/results';
import api from './services/api';
import { getMonsterIcon } from './services/monsterIcon';
import { SwitchButton } from './components/themeSwitcherButton';
import 'react-toastify/dist/ReactToastify.css';
import { TitleDiv } from './components/divTitle';

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [search, setSearch] = useState('');

  const [results, setResults] = useState([]);

  async function handleSearchMonster(FormEvent) {
    FormEvent.preventDefault();
    await api.get(`monsters?q={"name":"${search}"}`).then((response) => {
      const result = response.data;
      setResults(result);
      setSearch('');

      if (response.data.length === 0) {
        toast.dark(`🙁 Sorry ${search} not found`, {
          position: 'bottom-center',
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    });
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <TitleDiv>
        <Title>
          MHW
          <p>Weaknesses</p>
        </Title>
        <SwitchButton setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />
      </TitleDiv>

      <Form onSubmit={handleSearchMonster}>
        <StyledInput
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Try Rathalos"
        />
        <StyledButton type="submit" startIcon={<SearchIcon />}>
          Search
        </StyledButton>
      </Form>
      <ToastContainer
        autoClose={3000}
        transition={Flip}
      />
      {results.map((result) => (
        <Results key={result.id}>
          <h1>{result.name}</h1>
          <h2>Weaknesses</h2>
          <div id="weak">
            {result.weaknesses.map((weak) => (
              <p key={weak.element}>
                {weak.element}
                : lvl
                {weak.stars}
              </p>
            ))}
          </div>
          <img src={getMonsterIcon(result.name)} alt="MonsterIcon" />
          <span id="description">{result.description}</span>
        </Results>
      ))}
    </ThemeProvider>
  );
}

export default App;
