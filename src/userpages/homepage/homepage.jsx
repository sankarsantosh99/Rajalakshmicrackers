import React from 'react'
import HomeHeader from '../../usercomponents/homecomponents/homeheader';
import "./homepage.css"
import Hcarousel from '../../usercomponents/homecomponents/hcarousel';
import Hfooter from '../../usercomponents/homecomponents/hfooter';

function HomePage ()  {
  return (
    <>
    <div>
        <HomeHeader />
        <Hcarousel />
        <Hfooter />
    </div>
    </>
  );
}
export default HomePage;