import React, {useState} from 'react';

import Crack from './crack';

import Trex from './trex';
import Nautilus from './nautilus';
import Trilobyte from './trilobyte';

import './fossil.scss';


function Fossil({name}) {

    const [getTrexDig, setTrexDig] = useState(1);
    const [getNautDig, setNautDig] = useState(1);
    const [getTriloDig, setTriloDig] = useState(1);

    return (
        <>
            {name === 'trex' && (
                <div className="trex-wrap" onClick={() => setTrexDig(getTrexDig => getTrexDig + 1)}>
                    <Crack dig={getTrexDig}></Crack>
                    <Trex></Trex>
                </div>
            )}
            {name === 'nautilus' && (
                <div className="nautilus-wrap" onClick={() => setNautDig(getNautDig => getNautDig + 1)}>
                    <Crack dig={getNautDig}></Crack>
                    <Nautilus></Nautilus>
                </div>
            )}
            {name === 'trilobyte' && (
                <div className="trilobyte-wrap" onClick={() => setTriloDig(getTriloDig => getTriloDig + 1)}>
                    <Crack dig={getTriloDig}></Crack>
                    <Trilobyte></Trilobyte>
                </div>
            )}
        </>
      )
}
export default Fossil;