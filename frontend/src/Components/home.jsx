import React, { useState, useEffect } from 'react';
import SideNavigation from './SideNavigation';
import TopNavigation from './TopNavigation';
import ProductTable from './ProductTable';
import Welcome from './Welcome';
import SubcategoryTable from './SubcategoryTable';
import Navigation from './Navigation';
import CategoryTable from './categoryTable';
const Home = () => {
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  
  const [pageName, setPageName] = useState({ name: selectedPage });

  useEffect(() => {
    setPageName({ name: selectedPage });
  }, [selectedPage]);

  return (
    <>
    <Navigation />
    <div className="flex h-screen">
      <SideNavigation selectedPage={selectedPage} onSelectPage={setSelectedPage} />
      <div className="flex flex-col flex-1">
        <TopNavigation disabled={selectedPage === 'Dashboard'} currentPage={pageName} />
        <main className="p-4">
          {selectedPage === 'Dashboard' && <Welcome />}
          {selectedPage === 'Category' && <CategoryTable />}
          {selectedPage === 'Subcategory' && <SubcategoryTable />}
          {selectedPage === 'Products' && <ProductTable />}
        </main>
      </div>
    </div>
    </>
  );
};

export default Home;