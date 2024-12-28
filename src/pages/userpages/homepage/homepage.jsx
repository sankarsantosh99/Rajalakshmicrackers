import React from 'react'
import HomeHeader from '../../../usercomponents/homecomponents/homeheader';
import Hcarousel from '../../../usercomponents/homecomponents/hcarousel';
import Hfooter from '../../../usercomponents/homecomponents/hfooter';


function HomePage()  {
  return (
    <>
    <div className='homepage'>
        <HomeHeader />
        <Hcarousel />
        <Hfooter />
    </div>
    </>
  );
}

export default HomePage;