import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskList = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [createTask, setcreateTask] = useState({
    taskName: "",
    taskDescription: "",
    taskList: "",
    assignDate: "",
    taskList1: "",
    taskList2: "",
  });
  const navigate = useNavigate();

  const handlecrateUser = (e) => {
    setcreateTask({ ...createTask, [e.target.name]: e.target.value });
  };

  const addTaskList = async (e) => {
    try {
      e.preventDefault();
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo[0]._id;

      if (
        !createTask.taskName ||
        !createTask.taskDescription ||
        !createTask.assignDate
      ) {
        toast.error("Please fill in all required fields.");
        return;
      }

      const taskData = {
        ...createTask,
        taskOf: userId,
      };

      const response = await axios.post(`${baseUrl}/addmyTask`, taskData);
      toast.success("Task Created successfully!");

     
      setcreateTask({
        taskName: "",
        taskDescription: "",
        taskList: "",
        assignDate: "",
        taskList1: "",
        taskList2: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        x-show="popupOpen"
        x-transition=""
        class="fixed top-0 left-0 z-99999 flex h-screen w-full justify-center overflow-y-scroll bg-black/80 py-5 px-4"
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div class="relative m-auto w-full max-w-180 rounded-sm border border-stroke bg-gray p-4 shadow-default dark:border-strokedark dark:bg-meta-4 sm:p-8 xl:p-10">
          <button class="absolute right-1 top-1 sm:right-5 sm:top-5">
            <svg
              class="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8913 9.99599L19.5043 2.38635C20.032 1.85888 20.032 1.02306 19.5043 0.495589C18.9768 -0.0317329 18.141 -0.0317329 17.6135 0.495589L10.0001 8.10559L2.38673 0.495589C1.85917 -0.0317329 1.02343 -0.0317329 0.495873 0.495589C-0.0318274 1.02306 -0.0318274 1.85888 0.495873 2.38635L8.10887 9.99599L0.495873 17.6056C-0.0318274 18.1331 -0.0318274 18.9689 0.495873 19.4964C0.717307 19.7177 1.05898 19.9001 1.4413 19.9001C1.75372 19.9001 2.13282 19.7971 2.40606 19.4771L10.0001 11.8864L17.6135 19.4964C17.8349 19.7177 18.1766 19.9001 18.5589 19.9001C18.8724 19.9001 19.2531 19.7964 19.5265 19.4737C20.0319 18.9452 20.0245 18.1256 19.5043 17.6056L11.8913 9.99599Z"
                fill=""
              ></path>
            </svg>
          </button>

          <form action="#">
            <div class="mb-5">
              <label
                for="taskTitle"
                class="mb-2.5 block font-medium text-black dark:text-white"
              >
                Task title
              </label>
              <input
                type="text"
                name="taskName"
                value={createTask.taskName}
                id="taskTitle"
                placeholder="Enter task title"
                class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                onChange={handlecrateUser}
              />
            </div>

            <div class="mb-5">
              <label
                for="taskDescription"
                class="mb-2.5 block font-medium text-black dark:text-white"
              >
                Task description
              </label>
              <textarea
                name="taskDescription"
                value={createTask.taskDescription}
                onChange={handlecrateUser}
                id="taskDescription"
                cols="30"
                rows="7"
                placeholder="Enter task description"
                class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
              ></textarea>
            </div>

            <div class="mb-5">
              <label
                for="taskList"
                class="mb-2.5 block font-medium text-black dark:text-white"
              >
                Task list
              </label>
              <div class="flex flex-col gap-3.5">
                <div class="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList"
                    value={createTask.taskList}
                    onChange={handlecrateUser}
                    id="taskList"
                    placeholder="Enter list text"
                    class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                  />
                  2
                  <button class="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_75_12779)">
                        <path
                          d="M18.75 9.3125H10.7187V1.25C10.7187 0.875 10.4062 0.53125 10 0.53125C9.625 0.53125 9.28125 0.84375 9.28125 1.25V9.3125H1.25C0.875 9.3125 0.53125 9.625 0.53125 10.0312C0.53125 10.4062 0.84375 10.75 1.25 10.75H9.3125V18.75C9.3125 19.125 9.625 19.4687 10.0312 19.4687C10.4062 19.4687 10.75 19.1562 10.75 18.75V10.7187H18.75C19.125 10.7187 19.4687 10.4062 19.4687 10C19.4687 9.625 19.125 9.3125 18.75 9.3125Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_75_12779">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList1"
                    value={createTask.taskList1}
                    onChange={handlecrateUser}
                    id="taskList"
                    placeholder="Enter list text"
                    class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                  />

                  <button class="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4375 10.7187H1.5625C1.1875 10.7187 0.84375 10.4062 0.84375 10C0.84375 9.625 1.15625 9.28125 1.5625 9.28125H18.4375C18.8125 9.28125 19.1562 9.59375 19.1562 10C19.1562 10.375 18.8125 10.7187 18.4375 10.7187Z"
                        fill=""
                      ></path>
                    </svg>
                  </button>
                  <button class="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_75_12779)">
                        <path
                          d="M18.75 9.3125H10.7187V1.25C10.7187 0.875 10.4062 0.53125 10 0.53125C9.625 0.53125 9.28125 0.84375 9.28125 1.25V9.3125H1.25C0.875 9.3125 0.53125 9.625 0.53125 10.0312C0.53125 10.4062 0.84375 10.75 1.25 10.75H9.3125V18.75C9.3125 19.125 9.625 19.4687 10.0312 19.4687C10.4062 19.4687 10.75 19.1562 10.75 18.75V10.7187H18.75C19.125 10.7187 19.4687 10.4062 19.4687 10C19.4687 9.625 19.125 9.3125 18.75 9.3125Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_75_12779">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div class="flex items-center gap-2.5">
                  <input
                    type="text"
                    name="taskList2"
                    value={createTask.taskList2}
                    onChange={handlecrateUser}
                    id="taskList"
                    placeholder="Enter list text"
                    class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                  />

                  <button class="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4375 10.7187H1.5625C1.1875 10.7187 0.84375 10.4062 0.84375 10C0.84375 9.625 1.15625 9.28125 1.5625 9.28125H18.4375C18.8125 9.28125 19.1562 9.59375 19.1562 10C19.1562 10.375 18.8125 10.7187 18.4375 10.7187Z"
                        fill=""
                      ></path>
                    </svg>
                  </button>
                  <button class="flex h-12.5 w-12.5 items-center justify-center rounded-sm border border-stroke bg-white p-4 hover:text-primary dark:border-strokedark dark:bg-boxdark">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_75_12779)">
                        <path
                          d="M18.75 9.3125H10.7187V1.25C10.7187 0.875 10.4062 0.53125 10 0.53125C9.625 0.53125 9.28125 0.84375 9.28125 1.25V9.3125H1.25C0.875 9.3125 0.53125 9.625 0.53125 10.0312C0.53125 10.4062 0.84375 10.75 1.25 10.75H9.3125V18.75C9.3125 19.125 9.625 19.4687 10.0312 19.4687C10.4062 19.4687 10.75 19.1562 10.75 18.75V10.7187H18.75C19.125 10.7187 19.4687 10.4062 19.4687 10C19.4687 9.625 19.125 9.3125 18.75 9.3125Z"
                          fill=""
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_75_12779">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4.5 flex">
              <label className="mb-2.5 block text-black dark:text-white w-1/3 label-break">
                Assign Date <span className="text-meta-1">*</span>
              </label>
              <input
                type="date"
                onChange={handlecrateUser}
                name="assignDate"
                value={createTask.assignDate}
                className="w-2/3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              class="flex w-full items-center justify-center gap-2 rounded bg-primary py-2.5 px-4.5 font-medium text-white"
              onClick={addTaskList}
            >
              <svg
                class="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_60_9740)">
                  <path
                    d="M18.75 9.3125H10.7187V1.25C10.7187 0.875 10.4062 0.53125 10 0.53125C9.625 0.53125 9.28125 0.84375 9.28125 1.25V9.3125H1.25C0.875 9.3125 0.53125 9.625 0.53125 10.0312C0.53125 10.4062 0.84375 10.75 1.25 10.75H9.3125V18.75C9.3125 19.125 9.625 19.4687 10.0312 19.4687C10.4062 19.4687 10.75 19.1562 10.75 18.75V10.7187H18.75C19.125 10.7187 19.4687 10.4062 19.4687 10C19.4687 9.625 19.125 9.3125 18.75 9.3125Z"
                    fill=""
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_60_9740">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Add task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskList;
