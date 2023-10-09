

import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowAllProject = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);








  const getProduct = async () => {
    try {
    const response = await axios.get(
          `${baseUrl}/getProjectData`
          
        );
        setData(response.data.data);
    
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getProduct();
  }, []);
  


  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Project
        </h4>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Field Name</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Value</p>
        </div>
      </div>

      {/* Table Rows */}
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        >
          <div className="col-span-3 flex items-center">
          <h1 className="text-sm text-black dark:text-white" style={{ fontWeight: 'bold', fontSize: '15px' , marginTop: '7px' }}>Project Name</h1>


          
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.projectName}</p>
          </div>


         


          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white"  style={{ fontWeight: 'bold', fontSize: '15px' , marginTop: '7px' }}>Branch</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.branch}</p>
          </div>


          <div className="col-span-3 flex items-center">
            <h1 className="text-sm text-black dark:text-white"  style={{ fontWeight: 'bold', fontSize: '15px' , marginTop: '7px' }}>Client Address</h1>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.projectName}</p>
          </div>

          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white"  style={{ fontWeight: 'bold', fontSize: '15px' , marginTop: '7px' }}>Client Name</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.clientName}</p>
          </div>

          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white"  style={{ fontWeight: 'bold', fontSize: '15px' , marginTop: '7px' }}>Client Phone</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white">{item.clientPhone}</p>
          </div>

          <div className="col-span-3 flex items-center">
            <p className="text-sm text-black dark:text-white"  style={{ fontWeight: 'bold', fontSize: '15px' , marginTop: '7px' }}>Start Date</p>
          </div>
          <div className="col-span-3 flex items-center">
            <p className="text-sm text-meta-3">{item.startDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowAllProject;
