import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState(props.status);
    
    const handleClick = () => {
        if (status){    
        setStatus(current => !current);
        setIsActive(current => !current);
        props.handlerFunc(!status, props.platform);
        }else {
        setStatus(current => !current);
        setIsActive(current => !current);
        props.handlerFunc(!status, props.platform);
        }
      };

    return (  
        <div onClick={() => handleClick()}>
        <div style={{
            backgroundColor: isActive ? '#8dae10' : '',
            color: isActive ? 'white' : '',
            fontWeight: isActive ? 'bold' : ''
          }} className="fontTag"><FontAwesomeIcon icon={faTag}></FontAwesomeIcon>{props.platform}</div>
        </div>
    ) 
  }
  
  export default ToggleButton;

 