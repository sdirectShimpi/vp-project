import React, { useState, useEffect } from "react";
import axios from "axios";

const TableOne = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  console.log("data", data);

  const getProject = async () => {
    try {
      let token = localStorage.getItem("token");
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo[0]._id;

      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.get(

        `http://localhost:3010/api/v1/getRecordById?id=${userId}&page=1&limit=1`


       
      );
      console.log("ProductDelete", response);
      setData(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const [team, setTeam] = useState([]);
  // console.log("team", team)

  // const getTeamRecord = async () => {
  //   try {
  //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //     const userId = userInfo[0]._id;
  //     const response = await axios.get(
  //       `http://localhost:3010/api/v1/getPorjectRecord/${userId}`
  //     );
  //     console.log("getTeamRecord", response.data.data);
  //     setTeam(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Project Detail
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

      {data.length &&
        data.map((item) => {
          return (
            <div>
              <div
                key={item.id}
                className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              >
                <div className="col-span-3 flex items-center">
                  <h1
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Project Name
                  </h1>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.projectName}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Branch
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.branch}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <h1
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Client Address
                  </h1>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.clientAddress}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Client Name
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.clientName}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Client Phone
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.clientPhone}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Tech
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.tech}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    BDG Members
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.bdgMember}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Senior Manager
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.seniorManager}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    PO
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.userspo.name}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    ScrumMaster
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item.scrumMaster.name}
                  </p>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Start Date
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    {formatDate(item.startDate)}
                  </h5>
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    End Date
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    {formatDate(item.endDate)}
                  </h5>

                  {/* <p className="text-sm text-meta-3">{item.endDate}</p> */}
                </div>

                <div className="col-span-3 flex items-center">
                  <p
                    className="text-sm text-black dark:text-white"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginTop: "7px",
                    }}
                  >
                    Shift
                  </p>
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-meta-3">{item.shift}</p>
                </div>
              </div>
            </div>
          );
        })}

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Team Detail
        </h4>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
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
                Check Out Date
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
                        {item.userteam.name}
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
                      <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                        {formatDate(item.startDate)}
                      </h5>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-meta-5">4.8%</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       

        <div class="p-4 sm:p-6 xl:p-7.5">
          <nav>
            <ul class="flex flex-wrap items-center">
              <li>
                <a
                  class="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover:text-white"
                  href="#"
                >
                  <svg
                    class="fill-current"
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.17578 15.1156C7.00703 15.1156 6.83828 15.0593 6.72578 14.9187L0.369531 8.44995C0.116406 8.19683 0.116406 7.80308 0.369531 7.54995L6.72578 1.0812C6.97891 0.828076 7.37266 0.828076 7.62578 1.0812C7.87891 1.33433 7.87891 1.72808 7.62578 1.9812L1.71953 7.99995L7.65391 14.0187C7.90703 14.2718 7.90703 14.6656 7.65391 14.9187C7.48516 15.0312 7.34453 15.1156 7.17578 15.1156Z"
                      fill=""
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center justify-center rounded py-1.5 px-3 font-medium hover:bg-primary hover:text-white"
                  href="#"
                >
                  1
                </a>
              </li>

              <li>
                <a
                  class="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover:text-white"
                  href="#"
                >
                  <svg
                    class="fill-current"
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z"
                      fill=""
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
