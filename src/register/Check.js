import React, { useContext } from 'react';
import { AgriContext } from './AgriContext';

const Check = () => {

    let state = useContext(AgriContext);

    return(
        <div>
          {console.log(state)} 
        </div>
    );
}

export default Check;