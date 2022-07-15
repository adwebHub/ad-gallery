import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faSearch, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GridItem from './GridItem';
import backend from '../backend.json';
import ToggleButton from './ToggleButton';

const ImageGrid = () => {
  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [terms, setTerms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setAllData(backend);
    setFilteredData(backend);
    }, []);
 
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleFilter();
        }
      }
  
      const handleFilter = (event, keyword) => {
        let resultSearch = [];
        if (searchTerm != ''){
          resultSearch = allData.filter((data) => {
          return data.title.search(searchTerm) != -1;
          });
          setFilteredData(resultSearch);
        } else
          resultSearch = allData;
        if (event == true){
           terms.push(keyword);
        }else if (event == false){
         var index = terms.indexOf(keyword);
          if (index > -1) {
            terms.splice(index, 1);
          }
        }
        if (terms.length != 0){
          let result = [];
          result = resultSearch.filter((data) => {
            return data.platform.some(r=> terms.indexOf(r) >= 0)
          });
          setFilteredData(result);
        }else if (terms.length == 0 && searchTerm == '')
          setFilteredData(allData);
     }
    
    const handleTitle = (value) => {
      let result = [];
      result = filteredData.filter((data) => {
      return data.title.search(value) != -1;
      });
      setFilteredData(result);
    }

const listItems = filteredData.map(
    (element, key) => {
        return (
          <motion.div className="img-wrap"
          layout
          whileHover={{ opacity: 1 }}> 
          <GridItem imageUrl={element.url} goUrl={element.href} title={element.title} platform={element.platform} handlerFunc={handleTitle} filterFunc={handleFilter}/>
          </motion.div>
        )
      })

return (
  <div>
  <div className='searchBar'>
    <FontAwesomeIcon style={{ cursor: 'pointer' }}icon={faSearch} onClick={handleFilter}></FontAwesomeIcon>
    <input placeholder='Search' className='searchBar' type="text" onKeyDown={handleKeyDown} onChange={(event) => {setSearchTerm(event.target.value.toLowerCase());}} />
  </div>
  <div className='filterContainer'>
  <ToggleButton handlerFunc={handleFilter} platform="Animation" status={false}/>
  <ToggleButton handlerFunc={handleFilter} platform="Carousel" status={false}/>
  <ToggleButton handlerFunc={handleFilter} platform="Video" status={false}/>
  <ToggleButton handlerFunc={handleFilter} platform="Scratch" status={false}/>
  </div>
    <div className="img-grid">
       {listItems}
    </div>
  </div>
)
}

export default ImageGrid;