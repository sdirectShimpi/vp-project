import React, { useState } from "react";
import AddProject from "../../user/layout/AddProject";
import AddTask from "../Page/AddTask";

const ToDOList = () => {
  const [taskDescriptionVisible, setTaskDescriptionVisible] = useState(false);

  const handleAddTaskClick = () => {
    setTaskDescriptionVisible(true);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
     
      <div class="mx-auto max-w-5xl">
        <div class="mb-5">
          <label
            for="taskTitle"
            class="mb-2.5 block font-medium text-black dark:text-white"
          >
            Task title
          </label>
          <input
            type="text"
            name="taskTitle"
            id="taskTitle"
            placeholder="Enter task title"
            class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
          />
        </div>

        <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2
            class="text-title-md2 font-bold text-black dark:text-white"
            _msttexthash="112892"
            _msthash="129"
          >
            Task List
          </h2>

          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <a
                  class="font-medium"
                  href="index.html"
                  _msttexthash="140998"
                  _msthash="130"
                >
                  Dashboard /
                </a>
              </li>
              <li
                class="font-medium text-primary"
                _msttexthash="112892"
                _msthash="131"
              >
                Task List
              </li>
            </ol>
          </nav>
        </div>

        {/* ... (Previous code) */}
        <div
          className="mb-5"
          style={{ display: taskDescriptionVisible ? "block" : "none" }}
        >
          <label
            htmlFor="taskDescription"
            className="mb-2.5 block font-medium text-black dark:text-white"
          >
            Task description
          </label>
          <textarea
            name="taskDescription"
            id="taskDescription"
            cols="30"
            rows="7"
            placeholder="Enter task description"
            className="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
          ></textarea>
        </div>

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
    

      <div className="mt-9 grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        <div className="swim-lane flex flex-col gap-5.5">
          <h4 className="text-xl font-bold text-black dark:text-white">
            To Do's (03)
          </h4>

          <div
            draggable="true"
            className="task relative flex cursor-move justify-between rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div>
              <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                Task title
              </h5>

              <div className="flex flex-col gap-2">
                <label htmlFor="taskCheckbox1" className="cursor-pointer">
                  <div className="relative flex items-center pt-0.5">
                    <input
                      type="checkbox"
                      id="taskCheckbox1"
                      className="taskCheckbox sr-only"
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
                            d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <p>Here is task one</p>
                  </div>
                </label>

                <label htmlFor="taskCheckbox2" className="cursor-pointer">
                  <div className="relative flex items-center pt-0.5">
                    <input
                      type="checkbox"
                      id="taskCheckbox2"
                      className="taskCheckbox sr-only"
                      checked=""
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
                    <p>Here is task Two</p>
                  </div>
                </label>

                <label htmlFor="taskCheckbox3" className="cursor-pointer">
                  <div className="relative flex items-center pt-0.5">
                    <input
                      type="checkbox"
                      id="taskCheckbox3"
                      className="taskCheckbox sr-only"
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
                    <p>Here is task Three</p>
                  </div>
                </label>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDOList;




