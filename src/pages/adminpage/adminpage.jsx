import React from 'react';
import './adminpage.css';
import AdHeader from '../../admincomponent/allproducts/adheader';
import AdSideBar from '../../admincomponent/allproducts/adsidebar';

import AdTitle from '../../admincomponent/allproducts/adtitle';
import AdProducts from '../../admincomponent/allproducts/adproducts';
import AddProducts from '../../admincomponent/allproducts/addproducts';

export default function AdminPage() {
  return (
    <>
    <div className='adpage'>

    {/* <AdSideBar/>
    <AdHeader/>
    <AdTitle/>
    <AdProducts/> */}
    <AddProducts/>
    
    </div>
    </>
  )
}

