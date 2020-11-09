import React, { useState } from "react";
import { Form } from "./components/form";
import { StyledButton } from "./components/button";
import SearchIcon from "@material-ui/icons/Search";
import { StyledInput } from "./components/input";
import { Title } from "./components/title";
import { Results } from "./components/results";
import api from "./services/api";

function App() {
  const [newResult, setNewResult] = useState("");

  const [results, setResults] = useState([]);

  async function handleAddResult(FormEvent) {
    FormEvent.preventDefault();

    const response = await api.get(`monsters?q={"name": "${newResult}"}`);

    const result = response.data;

    setResults(result);
    setNewResult("");

    console.log(result);
  }

  return (
    <>
      <Title>
        MHW <p>Weaknesses</p>
      </Title>
      <Form onSubmit={handleAddResult}>
        <StyledInput
          value={newResult}
          onChange={(e) => setNewResult(e.target.value)}
          placeholder="Type monster name"
        />
        <StyledButton type="submit" startIcon={<SearchIcon />}>
          Search
        </StyledButton>
      </Form>
      {results.map((result) => (
        <Results key={result.id}>
          <h1>{result.name}</h1>
          <p>Weaknesses</p>
          <p>Elements: {result.elements}</p>
          <p>{result.description}</p>
        </Results>
      ))}
    </>
  );
}

export default App;
