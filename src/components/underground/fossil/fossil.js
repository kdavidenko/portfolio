import React from 'react';

import Trex from './trex';
import Nautilus from './nautilus';
import Trilobyte from './trilobyte';

import './fossil.scss';


function Fossil({name}) {
    return (
        <div>
            {name === 'trex' && (<Trex></Trex>)}
            {name === 'nautilus' && (<Nautilus></Nautilus>)}
            {name === 'trilobyte' && (<Trilobyte></Trilobyte>)}
        </div>
      )
}
export default Fossil;