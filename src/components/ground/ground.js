import React from 'react';
import CactusSVG from './components/cactus/cactus';
import SkullSVG from './components/skull/skull';

function Ground() {
    return (
        <div className="ground">
        <div className="cactus cactus-one"><CactusSVG></CactusSVG></div>
        <div className="cactus cactus-two"><CactusSVG></CactusSVG></div>
        <div className="skull"><SkullSVG></SkullSVG></div>
        </div>
      )
}
export default Ground;