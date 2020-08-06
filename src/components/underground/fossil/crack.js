import React from 'react';

import Crack1 from './crack1';
import Crack2 from './crack2';
import Crack3 from './crack3';

function Crack({dig}) {

    return (
        <>
            {dig === 1 && (
                <Crack1></Crack1>
            )}
            {dig === 2 && (
                <Crack2></Crack2>
            )}
            {dig === 3 && (
                <Crack3></Crack3>
            )}
        </>
      )
}
export default Crack;