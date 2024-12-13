import React from 'react'
import HomeHeader from '../../usercomponents/homecomponents/homeheader';
import "./homepage.css"
import Hcarousel from '../../usercomponents/homecomponents/hcarousel';

function HomePage ()  {
  return (
    <>
    <div>
        <HomeHeader />
        <Hcarousel />
        
    </div>
    </>
  );
}
export default HomePage;