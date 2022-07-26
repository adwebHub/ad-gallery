import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState(props.status);

    const handleClick = () => { 
        props.handlerFunc(status, props.platform);    
      };

    return (  
        <div onClick={() => handleClick()}>
        <div className="fontTag"><FontAwesomeIcon icon={faTag}></FontAwesomeIcon>{props.platform}</div>
        </div>
    ) 
  }
  
  export default ToggleButton;

 