import { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../../layout/Breadcrumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";


const UploadComponent = (projectData) => {
  
  console.log("first,", projectData);
  const projectId =projectData.data._id
   console.log("projectId",projectId);

  const { id } = useParams();


  const baseUrl = process.env.REACT_APP_API_URL;
  const projectPlan = process.env.REACT_APP_IMAGE_URL;
  const [values, setvalues] = useState({
    projectName: projectData.data.projectName,
    branch: projectData.data.branch,
    clientName:  projectData.data.clientName,
    clientAddress: projectData.data.clientAddress,
    clientEmail:  projectData.data.clientEmail,
    clientPhone:  projectData.data.clientPhone,
    bdgMember:  projectData.data.bdgMember,
    seniorManager: projectData.data.seniorManager,
    manager: projectData.data.manager,
    po:  projectData.data.po,
    scrumMaster:  projectData.data.scrumMaster,
    tech: projectData.data.tech,
    startDate:  projectData.data.startDate,
    endDate: projectData.data.endDate,
    team: projectData.data.team,
    projectDocument: null,
  });
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [file, setFile] = useState([]);

  const handleprojectDocument = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleCreateUser = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handleTeamMemberSelection = (e) => {
    const selectedMemberId = e.target.value;
    const selectedMember = data.find((item) => item._id === selectedMemberId);

    if (selectedMember) {
      const selectedMemberInfo = {
        _id: selectedMember._id,
        name: selectedMember.name,
      };

      setSelectedTeamMembers([...selectedTeamMembers, selectedMemberInfo]);
    }
  };

  const removeSelectedTeamMember = (memberId) => {
    const updatedMembers = selectedTeamMembers.filter(
      (member) => member._id !== memberId
    );
    setSelectedTeamMembers(updatedMembers);
  };

  // const addProject = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //     const userId = userInfo[0]._id;

  //     const team = selectedTeamMembers.map((item) => {
  //       return item._id;
  //     });
  //     values.team = team;
  //     console.log("values", values);

  //     const response = await axios.post(
  //       `${baseUrl}/crateProduct`,
  //       values
  //     );
  //     toast.success("Project Add successful!");

  //     console.log("res data", response);

  //     setvalues({
  //       projectName: "",
  //       branch: "",
  //       clientName: "",
  //       clientAddress: "",
  //       clientEmail: "",
  //       clientPhone: "",
  //       bdgMember: "",
  //       seniorManager: "",
  //       manager: "",
  //       po: "",
  //       scrumMaster: "",
  //       tech: "",
  //       startDate: "",
  //       endDate: "",
  //       team: [],
  //     });
  //   } catch (error) {}
  // };

  const [data, setData] = useState([]);
  const [taskSelected, setTaskSelected] = useState({});

  const getUserList = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getType`);

      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  const UploadComponent = async (e) => {
    e.preventDefault();
    const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    const userId = userinfo[0]._id;

    const team = selectedTeamMembers.map((item) => {
      return item._id;
    });
    values.team = team;
    console.log("create project", values);
    const formData = new FormData();
    formData.append("projectName", values.projectName);
    formData.append("branch", values.branch);
    formData.append("clientName", values.clientName);
    formData.append("clientAddress", values.clientAddress);
    formData.append("clientEmail", values.clientEmail);
    formData.append("clientPhone", values.clientPhone);
    formData.append("bdgMember", values.bdgMember);
    formData.append("seniorManager", values.seniorManager);
    formData.append("manager", values.manager);
    formData.append("po", values.po);
    formData.append("scrumMaster", values.scrumMaster);
    formData.append("tech", values.tech);
    formData.append("team", JSON.stringify(team));
   
    formData.append("startDate", values.startDate);
    formData.append("endDate", values.endDate);

    if (file) {
      formData.append("projectDocument", file);
    }
   
  
    const response = await axios.post(`${baseUrl}/updatedata/${projectId}`, formData);
    toast.success("Project Data Update successful!");
    console.log("response", response);
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
                Add Project
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
                      onChange={handleCreateUser}
                      name="projectName"
                      value={values.projectName}
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
                      onChange={handleCreateUser}
                      value={values.branch}
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
                      onChange={handleCreateUser}
                      value={values.clientName}
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
                      onChange={handleCreateUser}
                      value={values.clientAddress}
                      placeholder="Enter Client Address"
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
                      onChange={handleCreateUser}
                      value={values.manager}
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
                      onChange={handleCreateUser}
                      value={values.tech}
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
                        name="po"
                        value={values.po}
                        onChange={handleCreateUser}
                      >
                        <option value="">Select PO</option>
                        {data.map((item) => (
                          <option key={item._id} value={item._id}>
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
                        name="scrumMaster"
                        value={values.scrumMaster}
                        onChange={handleCreateUser}
                      >
                        <option value="">Select SM</option>
                        {data.map((item) => (
                          <option key={item._id} value={item._id}>
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
                      onChange={handleCreateUser}
                      value={values.clientEmail}
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
                      onChange={handleCreateUser}
                      value={values.clientPhone}
                      placeholder="Enter Client Phone Number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex mb-4.5">
                  <div className="w-1/2 pr-4">
                    <label className="mb-2.5 block text-black dark:text-white w-1/3 label-break">
                      Start Date <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="date"
                      onChange={handleCreateUser}
                      name="startDate"
                      value={values.startDate}
                      className="w-2/3 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white w-1/3">
                      End Date <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="date"
                      onChange={handleCreateUser}
                      name="endDate"
                      value={values.endDate}
                      className="w-2/3 ml-2 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark.bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Select Team Members
                  </label>

                  <select
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    name="team"
                    value={values.team}
                    onChange={handleTeamMemberSelection}
                  >
                    <option value="">Select Team Member</option>
                    {data.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Selected Team Members
                  </label>
                  <div className="flex flex-wrap items-center">
                    {selectedTeamMembers.map((member) => (
                      <span
                        key={member._id}
                        value={values.team}
                        onChange={handleCreateUser}
                        className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30"
                      >
                        {member.name}
                        <span
                          className="cursor-pointer pl-2 hover:text-danger"
                          onClick={() => removeSelectedTeamMember(member._id)}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div class="mb-5">
                  <label
                    for="taskDescription"
                    class="mb-2.5 block font-medium text-black dark:text-white"
                  >
                    Task description
                  </label>
                  <textarea
                    name="description"
                    onChange={handleCreateUser}
                    value={values.description}
                    id="taskDescription"
                    cols="30"
                    rows="7"
                    placeholder="Enter task description"
                    class="w-full rounded-sm border border-stroke bg-white py-3 px-4.5 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-boxdark dark:focus:border-primary"
                  ></textarea>
                </div>
                <div className="mb-4.5 flex">
                  <div className="w-1/2 pr-4">
                    <label className="mb-2.5 block text-black dark:text-white">
                      BDG Member
                    </label>
                    <input
                      type="text"
                      name="bdgMember"
                      onChange={handleCreateUser}
                      value={values.bdgMember}
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
                      onChange={handleCreateUser}
                      value={values.seniorManager}
                      placeholder="Enter Senior Manager"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                      Attach file
                    </label>
                    <input
                      type="file"
                      class="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                      name="projectDocument"
                      value={values.projectDocument}
                      onChange={handleprojectDocument}
                    />
                  </div>
                </div>
                <button
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  onClick={UploadComponent}
                >
                  Edit Projects
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadComponent;
