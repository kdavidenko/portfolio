import React from 'react';
import './App.scss';

import CactusSVG from './components/cactus/cactus';
import SkullSVG from './components/skull/skull';

function App() {
  return (
    <>
    <div className="site-background">
      <header>
        <div className="center title-1 bold block-12 brand-heavy">
          Kyle Davidenko
        </div>
        <div className="center title-2 block-12 brand-heavy">
          Front End Engineer
        </div>
      </header>
      <div className="cactus cactus-one"><CactusSVG></CactusSVG></div>
      <div className="cactus cactus-two"><CactusSVG></CactusSVG></div>
      <div className="skull"><SkullSVG></SkullSVG></div>
    </div>
    </>
  );
}

export default App;
