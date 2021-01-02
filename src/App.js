import React, { useState } from "react";
import { Form } from "./components/form";
import { StyledButton } from "./components/button";
import SearchIcon from "@material-ui/icons/Search";
import { StyledInput } from "./components/input";
import { Title } from "./components/title";
import { Results } from "./components/results";
import { StyledAlert } from "./components/allert";
import api from "./services/api";
import { getMonsterIcon } from "./services/monsterIcon";

function App() {
  const [newResult, setNewResult] = useState("");

  const [alertResult, setAlertResult] = useState(false);

  const [results, setResults] = useState([]);

  async function handleAddResult(FormEvent) {
    setAlertResult(false);
    FormEvent.preventDefault();
    await api.get(`monsters?q={"name": "${newResult}"}`).then((response) => {
      const result = response.data;
      setResults(result);
      setNewResult("");

      if (response.data.length === 0) {
        setAlertResult(true);
      }
    });
  }

  return (
    <>
      <Title>
        MHW <p>Weaknesses</p>
      </Title>
      <Form onSubmit={handleAddResult}>
        <StyledInput
          required
          value={newResult}
          onChange={(e) => setNewResult(e.target.value)}
          placeholder="Type monster name"
        />
        <StyledButton type="submit" startIcon={<SearchIcon />}>
          Search
        </StyledButton>
      </Form>
      {alertResult && (
        <StyledAlert variant="outlined" severity="error">
          Monstro não encontrado no banco ou ortografia incorreta
        </StyledAlert>
      )}
      {results.map((result) => (
        <Results key={result.id}>
          <h1>{result.name}</h1>
          <h2>Weaknesses</h2>
          <div id="weak">
            {result.weaknesses.map((weak) => (
              <p key={weak.element}>
                {weak.element}: lvl {weak.stars}
              </p>
            ))}
          </div>
          <img src={getMonsterIcon(result.name)} alt="MonsterIcon" />
          <p id="description">{result.description}</p>
        </Results>
      ))}
    </>
  );
}

export default App;
