



















import React, { useState } from 'react';

const ToDOList = () => {
  const [taskDescriptionVisible, setTaskDescriptionVisible] = useState(false);

  const handleAddTaskClick = () => {
    setTaskDescriptionVisible(true);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div class="mx-auto max-w-5xl">



        <div class="mb-5"><label for="taskTitle" class="mb-2.5 block font-medium text-black dark:text-white">Task title</label><input type="text" name="taskTitle" id="taskTitle" placeholder="Enter task title" class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary" /></div>







        <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-title-md2 font-bold text-black dark:text-white" _msttexthash="112892" _msthash="129">
            Task List
          </h2>

          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <a class="font-medium" href="index.html" _msttexthash="140998" _msthash="130">Dashboard /</a>
              </li>
              <li class="font-medium text-primary" _msttexthash="112892" _msthash="131">Task List</li>
            </ol>
          </nav>
        </div>



        {/* ... (Previous code) */}
        <div className="mb-5" style={{ display: taskDescriptionVisible ? 'block' : 'none' }}>
          <label htmlFor="taskDescription" className="mb-2.5 block font-medium text-black dark:text-white">
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











     
    </div>
  );
};

export default ToDOList;







