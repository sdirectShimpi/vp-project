
import React, { useState,useEffect } from "react";
import AddProject from "../../user/layout/AddProject";
import AddTask from "../Page/AddTask";

import TaskList from "./TaskList";
import axios from "axios";

 const ToDOList = () => {
   const baseUrl = process.env.REACT_APP_API_URL;
  const [taskDescriptionVisible, setTaskDescriptionVisible] = useState(false);

  const handleAddTaskClick = () => {
    setTaskDescriptionVisible(true);
  };



  const [data, setData] = useState([{taskDescription0:false,
   
taskDescription1:false,
taskDescription2:false}]);
  


  const getProduct = async () => {
    try {

 
      
      

      const response = await axios.get(`${baseUrl}/getmyTasks`);


      console.log("datafgghfhghyg", response.data);
      setData(response.data.data);
    }
     catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [])




  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
    return `${day}-${month}-${year}`;
  };




const getProject = async () => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("userInfoToDoList", userInfo[0]._id);

    if (userInfo && userInfo[0]._id) {
      const response = await axios.get(
        `${baseUrl}/getmyTasks?userId=${userInfo[0]._id}`
      );

      console.log("responseTodoList", response);

      setData(response.data.data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  useEffect(() => {
    getProject();
   }, [])


  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5">
          <label
            htmlFor="taskTitle"
            className="mb-2.5 block font-medium text-black dark:text-white"
          >
            Task title
          </label>
          <input
            type="text"
            name="taskTitle"
            id="taskTitle"
            placeholder="Enter task title"
            className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
          />
        </div>

        {/* ... (Previous code) */}

        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white"
          onClick={handleAddTaskClick}
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... (Add icon) */}
          </svg>

          <span>Add task</span>
        </button>
      </div>

      {taskDescriptionVisible && <TaskList />}

      <div className="mt-9 grid grid-cols-3 gap-7.5">
  {data.map((item, index) => (
    <div
      key={index}
      draggable="true"
      className="w-full relative flex flex-col gap-5.5"
    >
      <div className="task rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div>
        {/* <h1 className="mb-4 text-lg font-medium text-black dark:text-white">  Task Title
        <h3>   {item.taskName}</h3>
</h1> */}

<h3 >{item.taskName}</h3>

          
            <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    {formatDate(item.assignDate)}
                  </h5>


   

          <div className="flex flex-col gap-2">
  <label htmlFor={`taskCheckbox${index}`} className="cursor-pointer">
    <div className="relative flex items-center pt-0.5">
      <input
        type="checkbox"
        id={`taskCheckbox${index}`} // Unique id for the checkbox
        className="taskCheckbox sr-only"
        checked={item.taskDescription0}
      />
      <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
        <span className="text-white opacity-0">
          <svg
            className="fill-current"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.25820 7.00000 3.99270 7.00000C3.72721 7.00000 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
              fill=""
            ></path>
          </svg>
        </span>
      </div>
      <p>{item.taskList}</p>
    </div>
  </label>
</div>

<div className="flex flex-col gap-2">
  <label htmlFor={`taskCheckbox1_${index}`} className="cursor-pointer">
    <div className="relative flex items-center pt-0.5">
      <input
        type="checkbox"
        id={`taskCheckbox1_${index}`}
        className="taskCheckbox sr-only"
        checked={item.taskDescription1}
      />
      <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
        <span className="text-white opacity-0">
          <svg
            className="fill-current"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.25820 7.00000 3.99270 7.00000C3.72721 7.00000 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
              fill=""
            ></path>
          </svg>
        </span>
      </div>
      <p>{item.taskList1}</p>
    </div>
  </label>
</div>




          <div className="flex flex-col gap-2">
            <label htmlFor={`taskCheckbox2_${index}`} className="cursor-pointer">
              <div className="relative flex items-center pt-0.5">
                <input
                  type="checkbox"
                  id={`taskCheckbox2_${index}`} 
                  className="taskCheckbox sr-only"
                  checked={item.taskDescription2}
                />
                <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                  <span className="text-white opacity-0">
                    <svg
                      className="fill-current"
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.25820 7.00000 3.99270 7.00000C3.72721 7.00000 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                        fill=""
                      ></path>
                    </svg>
                  </span>
                </div>
                <p>{item.taskList2}</p>
              </div>
            </label>
          </div>



          <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
  Description
</h5>
<h7 >{item.taskDescription}</h7>





        </div>
      </div>
    </div>
  ))}
</div>
</div>
  );
};

export default ToDOList;


