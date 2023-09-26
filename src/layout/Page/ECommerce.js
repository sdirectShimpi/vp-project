
import React, { useState, useEffect } from 'react';
import CardOne from '../Page/CardOne';
import CardTwo from '../Page/CardTwo';
import ChartThree from '../Page/CardThree';
import CardFour from '../Page/CardFour';
import Loader from 'react-js-loader';

const ECommerce = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container mt-50">
    
          <Loader type="spinner-cub" bgColor="#7BADE2" title="spinner-cub" color="#FFFFFF" size={100} style={{ marginTop: '50%' }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardOne />
          <CardTwo />
          <ChartThree />
          <CardFour />
        </div>
      )}
    </>
  );
};

export default ECommerce;
