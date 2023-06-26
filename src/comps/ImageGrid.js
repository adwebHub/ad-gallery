import React from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';

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