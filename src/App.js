import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Footer from './comps/Footer';
import Navbar from './comps/Navbar';
import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import backend from './backend.json';
import axios from 'axios';
import ToggleButton from './comps/ToggleButton';

function App() {

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [terms, setTerms] = useState([]);
  const [termsID, setTermsID] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/adwebHub/backend/main/backend.json');
      const data = response.data;
      console.log(data)
      setAllData(data);
      setFilteredData(data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with an error:', error.response.status);
        console.error('Error details:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error setting up the request:', error.message);
      }
    }
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleTitle();
    }
  }

  const handleFilter = (event, keyword, title) => {
    if (keyword === 'Clear') {
      setTerms([]);
      setTermsID([]);
      setFilteredData(allData);
      console.log(filteredData);
    }
    setFilteredData(backend);
    let resultSearch = [];
    if (searchTerm !== '') {
      resultSearch = allData.filter((data) => {
        return data.title.search(searchTerm) !== -1;
      });
      setFilteredData(resultSearch);
    } else
      resultSearch = allData;
    if (event !== false) {
      if (termsID.indexOf(title) === -1) {
        terms.push({ title, keyword })
        termsID.push(title);

      } else
        console.log("This item already exists");
      //termsID.indexOf(title) === -1 ? terms.push({title, keyword}) : console.log("This item already exists");
    }
    if (event === false) {
      var index = termsID.indexOf(keyword);
      terms.splice(index, 1);
      termsID.splice(index, 1);
    }
    if (true) {
      let result = [];
      let test = [];
      terms.forEach(element => {
        test = resultSearch.filter((data) => {
          return data.id === element.keyword;
        });
        Array.prototype.push.apply(result, test);
      });
      setFilteredData(result);
    }
    if (terms.length === 0 && searchTerm === '')
      setFilteredData(allData);
  }


  const handleTitle = (value) => {
    let result = [];
    result = allData.filter((data) => {
      return data.title.search(searchTerm) !== -1;
    });
    setFilteredData(result);
  }

  const filterList = terms.map(
    (element, key) => {
      return (
        <ToggleButton platform={element.title} id={element.keyword} status={false} handlerFunc={handleFilter} />
      )
    })



  return (
    <div>
      <BrowserRouter>
        <Navbar handlePress={handleFilter} />
      </BrowserRouter>


      <div className="App">

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Title />

          <div className='searchBar'>
            {/* <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faSearch} onClick={handleFilter}></FontAwesomeIcon> */}
            <input placeholder='Search' className='searchBar' type="text" onKeyDown={handleKeyDown} onChange={(event) => { setSearchTerm(event.target.value.toLowerCase()); }} />
          </div>
          <div className='filterContainer'>
            Filters: <ToggleButton platform='Clear' id='' status={false} handlerFunc={handleFilter} /> {filterList}
          </div>
          <ImageGrid filteredData={filteredData} allData={allData} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
