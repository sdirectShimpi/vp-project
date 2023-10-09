
import { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../../layout/Breadcrumb"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [createUser, setcreateUser] = useState({
    projectName: "",
    branch: "",
    clientName: "",
    clientAddress: "",
    clientEmail: "",
    clientPhone: "",
    bdgMember: "",
    seniorManager: "",
    manager: "",
    po: "",
    scrumMaster: "",
    tech: "",
    startDate: "",
    endDate: "",
  });

  const handlecrateUser = (e) => {
    setcreateUser({ ...createUser, [e.target.name]: e.target.value });
  };

  const addProject = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${baseUrl}/crateProduct`, createUser);
      toast.success(" Project Add successful!");

      console.log("res data", response);

      setcreateUser({
        projectName: "",
        branch: "",
        clientName: "",
        clientAddress: "",
        clientEmail: "",
        clientPhone: "",
        bdgMember: "",
        seniorManager: "",
        manager: "",
        po: "",
        scrumMaster: "",
        tech: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) { }
  };




  const [data, setData] = useState([]);
  const [taskSelected, setTaskSelected] = useState({}); // Keep track of selected tasks

  const getProduct = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getType`);
      console.log("datafgghfhghyg", response.data);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleCheckboxChange = (id) => {
    setTaskSelected((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id], // Toggle the selected state for this task
    }));
  };


  return (
    <>
      <Breadcrumb pageName="Add Project" />

      <div className="grid grid-cols-4 gap-9 sm:grid-cols-1">
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

        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Contact Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
           
             <div className="flex mb-4.5">
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Project Name
                    </label>
                    <input
                      type="text"
                      onChange={handlecrateUser}
                      name="projectName"
                      value={createUser.projectName}
                      placeholder="New Project Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-1/2 pl-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                     Branch
                    </label>
                    <input
                      type="text"
                      name="branch"
                      onChange={handlecrateUser}
                      value={createUser.branch}
                      placeholder="Enter Branch Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>




                 <div className="flex mb-4.5">
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Client Name
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      onChange={handlecrateUser}
                      value={createUser.clientName}
                      placeholder="Enter Client Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-1/2 pl-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Client Address
                    </label>
                    <input
                      type="text"
                      name="clientAddress"
                      onChange={handlecrateUser}
                      value={createUser.clientAddress}
                      placeholder="Enter Client Address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>




                <div className="mb-4.5 flex">
                  <div className="w-1/2 pr-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                      BDG Member
                    </label>
                    <input
                      type="text"
                      name="bdgMember"
                      onChange={handlecrateUser}
                      value={createUser.bdgMember}
                      placeholder="Enter BDG Member"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Senior Manager
                    </label>
                    <input
                      type="text"
                      name="seniorManager"
                      onChange={handlecrateUser}
                      value={createUser.seniorManager}
                      placeholder="Enter Senior Manager"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>


                <div className="flex mb-4.5">
                  <div className="w-1/2 pr-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Manager
                    </label>
                    <input
                      type="text"
                      name="manager"
                      onChange={handlecrateUser}
                      value={createUser.manager}
                      placeholder="Enter Manager"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Tech
                    </label>
                    <input
                      type="text"
                      name="tech"
                      onChange={handlecrateUser}
                      value={createUser.tech}
                      placeholder="Enter"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>






                <div className="mb-4.5 flex">
                  <div className="w-1/2 pr-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                      PO
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        name="userType"
                        onChange={getProduct}
                      >
                        <option value="">Type of User</option>
                        {data.map((item) => (
                          <option key={item.email} value={item.email}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Scrum Master
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        name="userType"
                        onChange={getProduct}
                      >
                        <option value="">Type of User</option>
                        {data.map((item) => (
                          <option key={item.email} value={item.email}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>


                <div className="flex mb-4.5">
                  <div className="w-1/2 pr-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Client Email
                    </label>
                    <input
                      type="text"
                      name="clientEmail"
                      onChange={handlecrateUser}
                      value={createUser.clientEmail}
                      placeholder="Enter Client Email"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Client Phone Number
                    </label>
                    <input
                      type="text"
                      name="clientPhone"
                      onChange={handlecrateUser}
                      value={createUser.clientPhone}
                      placeholder="Enter Client Phone Number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>



                <div className="mb-4.5 flex">

                  <div className="mb-4.5 flex">
                    <label className="mb-2.5 block text-black dark:text-white w-1/3 label-break">
                      Start Date <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="date"
                      onChange={handlecrateUser}
                      name="startDate"
                      value={createUser.startDate}
                      className="w-2/3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>







                  <div className="mb-4.5 flex" style={{ marginLeft: "10%" }}>
                    <label className="mb-2.5 block text-black dark:text-white w-1/3">
                      End Date <span className="text-meta-1">*</span>
                    </label>

                    <input
                      type="date"
                      onChange={handlecrateUser}
                      name="endDate"
                      value={createUser.endDate}
                      className="w-2/3 ml-2 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark.bg-form-input dark:focus:border-primary"
                    />
                  </div>

                </div>





                {/* <div>
                  <h5 className="mb-4 text-lg font-medium text-black dark:text-white">
                    Add User
                  </h5>
                  <div className="flex flex-col gap-2">
                    {data.map((task) => (
                      <label key={task.id} htmlFor={`taskCheckbox${task.id}`} className="cursor-pointer">
                        <div className="relative flex items-center pt-0.5">
                          <input
                            type="checkbox"
                            id={`taskCheckbox${task.id}`}
                            className="taskCheckbox sr-only"
                            checked={taskSelected[task.id] || false}
                            onChange={() => handleCheckboxChange(task.id)}
                          />
                          <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark dark:bg-boxdark-2">
                            <span
                              className={`text-white ${taskSelected[task.id] ? "opacity-100" : "opacity-0"
                                }`}
                            >
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
                          <p>{task.name}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div> */}




                <div class="mb-5">
                            <label for="taskDescription" class="mb-2.5 block font-medium text-black dark:text-white">Task description</label>
                            <textarea  name="description"
                    onChange={handlecrateUser}
                    value={createUser.description}
                     id="taskDescription" cols="30" rows="7" placeholder="Enter task description" class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"></textarea>
                        </div>


{/* 
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    onChange={handlecrateUser}
                    value={createUser.description}
                    placeholder="Write.."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div> */}



                <button
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  onClick={addProject}
                >
                  Add Projects
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
