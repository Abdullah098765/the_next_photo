import React from 'react';
import Background1 from './background1';
import Background2 from './background2';

const BackgroundContainer1 = () => {
      return (
            <div className='h-full w-full absolute -z-10 bg-black items-center'>
                  <Background2 />
                  <Background1 />
            </div>
      );
}

export default BackgroundContainer1;
