import React from 'react';
import AdHeader from '../../admincomponent/allproducts/adheader';
import AdSideBar from '../../admincomponent/allproducts/adsidebar';
import './adminpage.css';

export default function AdminPage() {
  return (
    <>
    <div className='adpage'>

    <AdSideBar/>
    <AdHeader/>
    
    </div>
    </>
  )
}

