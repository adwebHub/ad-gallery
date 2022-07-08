import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import backend from '../backend.json';
import ToggleButton from './ToggleButton';

const ImageGrid = () => {
  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    setAllData(backend);
    setFilteredData(backend);
    }, []);
 
    const handleSearch = (event) => {
      let value = event.target.value.toLowerCase();
      let result = [];
      result = allData.filter((data) => {
      return data.title.search(value) != -1;
      });
      setFilteredData(result);
      }

      const handleFilter = (event, keyword) => {
        if (event){
           terms.push(keyword);
        }else{
         var index = terms.indexOf(keyword);
          if (index > -1) {
            terms.splice(index, 1);
          }
         }
        if (terms.length != 0){
        let result = [];
        result = allData.filter((data) => {
            return data.platform.some(r=> terms.indexOf(r) >= 0)
        });
       setFilteredData(result);
        }else
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
  <input placeholder='Search' className='searchBar' type="text" onChange={(event) => handleSearch(event)} />
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


 
