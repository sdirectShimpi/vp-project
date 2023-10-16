import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowAllProject = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const pageLimit = 3;
  console.log("pageLimit",pageLimit)

  const getProject = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/getProjectData?page=${currentPage}&limit=${pageLimit}`
      );
      setData(response.data.data.data);
      setTotalRecords(response.data.data.count);
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };
 
  console.log("totalRecords",totalRecords);
  useEffect(() => {
    getProject();

  }, [currentPage]);


 
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
    return `${day}-${month}-${year}`;
  };





  // const totalPages = Math.ceil(totalRecords / pageLimit);

  // const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);
  // console.log("totalPages",totalPages)


    return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Team Detail
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Project Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Branch
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Tech
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                ActiveDate
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Client Name
              </h5>
            </div>
          </div>
          <div>
            {data.length &&
              data.map((item) => {
                return (
                  <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                      <div className="flex-shrink-0">
                        {/* <img src={BrandOne} alt="Brand" /> */}
                      </div>

                      <p className="hidden text-black dark:text-white sm:block">
                        {item.projectName}
                      </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">
                        {item.branch}
                      </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-meta-3">{item.tech}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <h5 className="mb-4 text-lg font-medium text-black dark:text-white">   {formatDate(item.startDate)}
                       
                      </h5>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-meta-5">{item.clientName}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark">
        <div class="p-4 sm:p-6 xl:p-7.5">
          <nav >
            <div style={{ float: "right" }}>
            <ul class="flex flex-wrap items-center"  >
              <li>
                <button
                  class="flex h-8 w-8 items-center justify-center dark:hover:bg-meta-4 rounded hover:bg-primary hover:text-black"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                ></button>
              </li>
              <li>
                <button
                  class="flex items-center justify-center rounded py-1.5 px-3 font-medium hover:bg-primary hover:text-white"
                  onClick={() => setCurrentPage(1)}
                >
                  {currentPage}
                </button>
              </li>
              <li>
                <button
                  class="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover-text-white"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={data.length < pageLimit}
                >
                  {/* Next page button */}
                </button>
              </li>
             
            </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ShowAllProject;
