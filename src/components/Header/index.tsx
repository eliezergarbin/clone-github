import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, GithubLogo, SearchForm } from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate('/' + search.toLowerCase().trim());
    }

  return (
    <Container>
      <GithubLogo />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Useraname or repo"
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
