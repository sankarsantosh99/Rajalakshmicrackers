import React from 'react';
import AdHeader from '../../admincomponent/allproducts/adheader';
import AdSideBar from '../../admincomponent/allproducts/adsidebar';
import './adminpage.css';
import AdTitle from '../../admincomponent/allproducts/adtitle';
import AdProducts from '../../admincomponent/allproducts/adproducts';

export default function AdminPage() {
  return (
    <>
    <div className='adpage'>

    <AdSideBar/>
    <AdHeader/>
    <AdTitle/>
    <AdProducts/>
    
    </div>
    </>
  )
}

