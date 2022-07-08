import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons';

const GridItem = (props) => {
 const title = props.title;

  return (  
    <div>
    <a href={props.goUrl} target="_blank" rel="noopener noreferrer">
    <motion.img src={props.imageUrl} alt="_pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}  
          />  
   </a>
   <div style={{display: 'flex'}}>
   <div className="titleText" onClick={() => props.handlerFunc(title)}>{props.title}</div>
   </div>
   <div style={{display: 'flex', flexDirection: 'row'}}>
  
  {props.platform.map(function (value, index) {
    return <div className="myImgTags" key={index}>
    <FontAwesomeIcon icon={faTag}></FontAwesomeIcon> {value}</div>
  })
}
   </div>
  </div>
  )

}

export default GridItem;