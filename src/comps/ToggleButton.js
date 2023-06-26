import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = (props) => {
    const [status] = useState(props.status);

    const handleClick = () => { 
        props.handlerFunc(status, props.platform);    
      };

    return (  
        <div onClick={() => handleClick()}>
        <div className="fontTag"><FontAwesomeIcon icon={faTag}></FontAwesomeIcon>{props.platform}<FontAwesomeIcon style={{marginBottom: "-6px", padding: "5"}}icon={faClose}></FontAwesomeIcon> </div>
        </div>
    ) 
  }
  
  export default ToggleButton;

 