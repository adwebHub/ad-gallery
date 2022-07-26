import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faSearch, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GridItem from './GridItem';
import backend from '../backend.json';
import ToggleButton from './ToggleButton';

const ImageGrid = (props) => {
  
const listItems = props.filteredData.map(
  (element, key) => {
      return (
        <motion.div className="img-wrap"
        layout
        whileHover={{ opacity: 1 }}> 
        <GridItem imageUrl={element.url} goUrl={element.href} title={element.title} platform={element.platform}/>
        </motion.div>
      )
    })

return (
  <div className="img-grid">
     {listItems}
  </div>
)
}

export default ImageGrid;