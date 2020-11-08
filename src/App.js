import React, { useState, FormEvent } from "react";
import { Form } from "./components/form";
import { StyledButton } from "./components/button";
import SearchIcon from "@material-ui/icons/Search";
import { StyledInput } from "./components/input";
import { Title } from "./components/title";
import { Results } from "./components/results";
import monsterImg from "./img/rathalos.png";
import api from "./services/api";

function App() {
  const [newResult, setNewResult] = useState("");

  const [results, setResults] = useState([]);

  async function handleAddResult(FormEvent) {
    FormEvent.preventDefault();

    const response = await api.get(`monsters?q={"name": "Zinogre"}`);

    const result = response.data;

    setResults(result);

    console.log(response.data);
  }

  return (
    <>
      <Title>
        MHW <p>Weakness</p>
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
      <Results>
        <h1>Rathalos</h1>
        <img src={monsterImg} alt="" />
        <p>Weakness: Thunder</p>
      </Results>
    </>
  );
}

export default App;
