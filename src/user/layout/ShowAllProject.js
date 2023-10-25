import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UploadComponent from "./UpdateComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";

const ShowAllProject = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [show, setShow] = useState([]);
  const [isEdited, setIsEdited] = useState(false);
  const [projectdata, setprojectdata] = useState({});
  const [isChecked, setIsChecked] = useState("all");
  const [pageLimit, setPageLimit] = useState(5);
  const [search, setSearch] = useState();

  //const pageLimit = 3;

  const handlePageLimitChange = (limit) => {
    setPageLimit(limit);
  };

  const handleChecked = (status) => {
    setIsChecked(status);
  };

  console.log("isChecked", isChecked);

  const hendelSearch = async (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    if (inputValue === "") {
      setSearch("");
    }
  };

  const getProject = async (e) => {
    try {
      //const item = e.target.value;
      //setSearch(item);

      const response = await axios.get(
        `${baseUrl}/getProjectData?page=${currentPage}&limit=${pageLimit}&projectName=${search}&isDeleted=${isChecked}`
      );

      setData(response.data.data.data);
      setTotalRecords(response.data.data.count);
      console.log("getProject", response);
    } catch (err) {
      console.log(err);
    }
  };




  
  // const getProject = async (e) => {
  //   try {
  //     // const item = e.target.value;
  //     // setSearch(item);

  //     if (!item) {
  //       const response = await axios.get(
  //         `${baseUrl}/getProjectData?page=${currentPage}&limit=${pageLimit}`
  //       );
  //       setData(response.data.data.data);
  //       setTotalRecords(response.data.data.count);
  //     } else {
  //       const response = await axios.get(
  //         `${baseUrl}/getProjectData?page=${currentPage}&limit=${pageLimit}&projectName=${item}`
  //       );
  //       setData(response.data.data.data);
  //       setTotalRecords(response.data.data.count);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getProject();
  }, [currentPage, pageLimit, search, isChecked]);

  const handleMenuToggle = (index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };
  const updateProject = (item) => {
    setprojectdata(item);
    setIsEdited(true);
  };
  const handleDelete = async (item) => {
    try {
      console.log("id", item);
      const response = await axios.delete(
        `http://localhost:3010/api/v1/deteteRecord/${item._id}`
      );

      getProject();
      console.log("res", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  // const userStatus = async (isChecked, _id) => {
  //   console.log("id", _id, isChecked);

  //   const status = isChecked ? "activate" : "deactivate";

  //   try {
  //     const res = await axios.patch(
  //       `http://localhost:3010/api/v1/updateStatus`,
  //       {
  //         status,
  //         _id,
  //       }
  //     );

  //     console.log("Response from API:", res);

  //     if (res.status === 200) {
  //       toast.success(res.data.msg);
  //       const updatedData = data.map((item) => {
  //         if (item._id === _id) {
  //           return {
  //             ...item,
  //             isDeleted: isChecked,
  //           };
  //         }
  //         return item;
  //       });
  //       setData(updatedData);
  //     }
  //   } catch (error) {
  //     console.error("Error updating status:", error);
  //   }
  // };

  const totalPages = Math.ceil(totalRecords / pageLimit);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleSearch = async (e) => {
    const item = e.target.value;
    setSearch(item);

    const res = await axios.get(
      `http://localhost:3010/api/v1/searchRecord?projectName=${item}&status=${isChecked}`
    );
    console.log("searched", res.data);

    setData(res.data.data);
  };

  return (
    <>
      <div>
        <div className="relative">
          {/* <button
            className="absolute top-1/2 left-0 -translate-y-1/2"
            style={{ marginBottom: "15%" }}
          >
            <svg
              className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                fill=""
              />
            </svg>
            </button> */}

          {/* <input
            type="text"
            name="search"
            placeholder="Type to search..."
            className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
            value={search}
            style={{  }}
            onChange={hendelSearch}
            //onChange={(e) => getProject(e)}
          /> */}

          <input
            type="text"
            name="search"
            placeholder="Type to search..."
            className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
            value={search}
            onChange={hendelSearch}
            style={{
              border: "2px solid #ccc",
              borderRadius: "5px",
              padding: "8px 10px",
              fontSize: "16px",
              boxShadow: "0px 0px 5px 0px #ccc",
            }}
          />
          

          <div
            className="btn-group "
            style={{ marginLeft: "90%", marginTop: "2%" }}
          >
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle text-meta-2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "#f56f42" }}
            >
              Status
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setIsChecked("all")}
                >
                  ALL
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setIsChecked(false)}
                >
                  Active
                </button>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => setIsChecked(true)}
                >
                  Deactive
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isEdited && isEdited ? (
        <UploadComponent data={projectdata} />
      ) : (
        <div
          className="rounded-sm border border-stroke bg-white px-2 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 st"
          style={{ marginTop: "5%" }}
        >
          <h4 className="mb-1 text-xl font-semibold text-black dark:text-white">
            Team Detail
          </h4>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
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
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Action
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Status
                </h5>
              </div>
            </div>
            <div>
              {data.length &&
                data.map((item, index) => {
                  return (
                    <div className="grid grid-cols-7 border-b border-stroke dark:border-strokedark sm:grid-cols-7">
                      <div className="flex items-center gap-1 p- 1.5 xl:p-5">
                        <p className="hidden text-black dark:text-white sm:block">
                          {item.projectName}
                        </p>
                      </div>

                      <div className="flex items-center justify-center p-1.5 xl:p-1">
                        <p className="text-black dark:text-white">
                          {item.branch}
                        </p>
                      </div>

                      <div className="flex items-center justify-center p-2.5 xl:p-5">
                        <p className="text-meta-3">{item.tech}</p>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                          {" "}
                          {formatDate(item.startDate)}
                        </h5>
                      </div>

                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p className="text-meta-5">{item.clientName}</p>
                      </div>

                      <div style={{ marginLeft: "35%" }}>
                        <i
                          class="fa-solid fa-pen"
                          style={{ color: "#34eb7d", display: "inline" }}
                          onClick={() => updateProject(item)}
                        ></i>
                        <br />

                        <i
                          class="fa-solid fa-trash"
                          style={{ color: "#d5203b", display: "inline" }}
                          onClick={() => handleDelete(item)}
                        ></i>
                      </div>

                      {/* <div className="dropdown" style={{ marginLeft :"35%"}}>
                        <button
                          type="button"
                          className="btn p-0 dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                          onClick={() => handleMenuToggle(index)}
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div
                          className={`dropdown-menu ${
                            show[index] ? "show" : ""
                          }`}
                        >
                          <i
                            class="fa-solid fa-pen"
                            style={{ color: "#34eb7d" , display:'inline'}}
                            onClick={() => updateProject(item)}
                          ></i>
                          
                          <i
                            class="fa-solid fa-trash"
                            style={{ color: "#d5203b" , display: "inline", marginLeft :"20%"}}
                            onClick={() => handleDelete(item)}
                          ></i>
                        </div>
                      </div> */}

                      {/* <div className="dropdown" style={{ marginRight: "20%" }}>
  <button
    type="button"
    className="btn p-0 dropdown-toggle hide-arrow"
    data-bs-toggle="dropdown"
    onClick={() => handleMenuToggle(index)}
  >
    <i className="bx bx-dots-vertical-rounded"></i>
  </button>
  <div className={`dropdown-menu ${show[index] ? "show" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
    <i
      className="fa-solid fa-pen"
      style={{ color: "#34eb7d", display: "inline", marginRight: "5px" }}
      onClick={() => updateProject(item)}
    ></i>
    <i
      className="fa-solid fa-trash"
      style={{ color: "#d5203b", display: "inline" }}
      onClick={() => handleDelete(item)}
    ></i>
  </div>
</div> */}

                      <div>
                        {item.isDeleted && item.isDeleted === true ? (
                          <span className="text-meta-1">Deactive</span>
                        ) : (
                          <span className="text-meta-3">Active</span>
                        )}
                      </div>

                      {/* 
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          onChange={(e) =>
                            userStatus(e.target.checked, item._id)
                          }
                          checked={item.isDeleted}
                        />

                        <span className="switch-toggle-slider">
                          <span
                            className={`switch-on${
                              item.isDeleted ? " Active" : ""
                            }`}
                            style={{ backgroundColor: " #0000ff" }}
                          ></span>
                          <span
                            className={`switch-off${
                              !item.isDeleted ? " Deactive" : ""
                            }`}
                          ></span>
                        </span>
                        <span className="switch-label">
                          {item.isDeleted ? "Active" : "Deactive"}
                        </span>
                      </Form> */}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark-bg-boxdark ">
        <div class="p-4 sm:p-6 xl:p-7.5">
          <nav>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle text-meta-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#f56f42" }}
              >
                Page Limit
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handlePageLimitChange(5)}
                  >
                    5
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handlePageLimitChange(10)}
                  >
                    10
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handlePageLimitChange(15)}
                  >
                    15
                  </button>
                </li>
              </ul>
              <p>Selected Page Limit:- {pageLimit}</p>
            </div>

            <div style={{ float: "right" }}>
              <ul class="flex flex-wrap items-center ">
                <li>
                  <button
                    class="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover:text-white"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                  </button>
                </li>
                <div class="flex">
                  {pageNumbers.map((page) => (
                    <li key={page}>
                      <button
                        class="flex items-center justify-center rounded py-1.5 px=1.2 font-medium hover:bg-primary hover:text-white"
                        onClick={() => setCurrentPage(page)}
                      >
                        <li class="page-item">
                          <a class="page-link" href="#">
                            {page}
                          </a>
                        </li>
                      </button>
                    </li>
                  ))}
                </div>

                <button
                  class="flex h-8 w-8 items-center justify-center rounded hover:bg-primary hover:text-white"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={data.length < pageLimit}
                >
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ShowAllProject;
