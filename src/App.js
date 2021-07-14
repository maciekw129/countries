import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { Header } from './Components/Header/Header.js';
import { SearchBar } from './Components/SearchBar/SearchBar.js';
import { Countries } from './Components/Countries/Countries.js';
import { Filter } from './Components/Filter/Filter.js';

const AppContainer = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {

  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [data, setData] = useState(undefined);
  const [filteredData, setFilteredData] = useState(undefined);
  const [searchTerm, setSearchTerm] = useState(null);
  const [filterTerm, setFilterTerm] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos);
        setData(repos);
        setFilteredData(repos);
      })
  }, []);

  useEffect(() => {
    let filtered = data;
    if(searchTerm !== null) {
      filtered = filtered.filter((country) => country.name.toLowerCase().includes(searchTerm));
    }

    if(filterTerm !== null && filterTerm !== 'world') {
      filtered = filtered.filter((country) => country.region === filterTerm);
    }

    setFilteredData(filtered);
    
  }, [searchTerm, filterTerm]);

  const darkModeSwitcher = () => {
    if (isDarkModeOn) {
      setIsDarkModeOn(false);
    } else {
      setIsDarkModeOn(true);
    }
  };

  const search = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const filter = (event) => {
    setFilterTerm(event.target.value);
  }

  const detailsSwitcher = () => {
    if(showDetails) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
      window.scrollTo(0, 0);
    }
    setSearchTerm(null);
  }

  return (
    <AppContainer>
      <GlobalStyle isDarkModeOn={isDarkModeOn} />
      <Header darkModeSwitcher={darkModeSwitcher} isDarkModeOn={isDarkModeOn} />

      {showDetails ?
       null 
       : <SearchBar search={search} filter={filter} isDarkModeOn={isDarkModeOn} />}
      {filteredData ?
       <Countries 
       data={filteredData} 
       showDetails={showDetails} 
       detailsSwitcher={detailsSwitcher} 
       isDarkModeOn={isDarkModeOn}
       /> 
       : null}
      
    </AppContainer>
  );
}

export default App;
