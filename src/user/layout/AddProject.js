import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useParams }  from 'react-router-dom'

import * as Yup from "yup";
import axios from "axios";
import Breadcrumb from "../../layout/Breadcrumb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
  const { _id } = useParams();
  console.log("first",_id)
  const baseUrl = process.env.REACT_APP_API_URL;
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("Project Name is required"),
    branch: Yup.string().required("Branch is required"),
    clientName: Yup.string().required("Client Name is required"),
    clientAddress: Yup.string().required("Client Address is required"),
    clientEmail: Yup.string().required("Client Email is required"),
    clientPhone: Yup.string().required("Client Phone No is required"),
    bdgMember: Yup.string().required("BDG Member Name is required"),
    seniorManager: Yup.string().required("SeniorManager Name is required"),
    manager: Yup.string().required("Manager is required"),

    tech: Yup.string().required("Tech is required"),
    startDate: Yup.string().required("Start is required"),
    endDate: Yup.string().required(" EndDate is required"),

    // po: Yup.string().required("PO is required"),
    // scrumMaster: Yup.string().required("Scrum Master is required"),
    //team: Yup.string().required("team is required"),
  });

  const handleTeamMemberSelection = (e) => {
    const selectedMemberId = e.target.value;
    // Replace 'data' with your actual data source
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

  const handleprojectDocument = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const getProject = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getType`);

      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const userId = userInfo[0]._id;

      const team = selectedTeamMembers.map((item) => {
        return item._id;
      });

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

      // Add other form fields to the formData
      formData.append("team", JSON.stringify(team));

      if (file) {
        formData.append("projectDocument", file);
      }

      const response = await axios.post(`${baseUrl}/crateProduct`, formData);
      toast.success("Project Add successful!");

      console.log("response", response);

      setSelectedTeamMembers([]);
      setFile(null);
    } catch (error) {
      // Handle errors
    }
  };

  // value={createProject.scrumMaster}
  // onChange={handleCreateUser}

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
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Project
              </h3>
            </div>
            <Formik
              initialValues={{
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
                team: [],
                id:""
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values, handleChange, handleBlur, touched }) => (
                <Form>
                  <div className="p-6.5">
                    <div className="flex mb-4.5">
                      <div className="w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Project Name
                        </label>

                        <Field
                          type="text"
                          name="projectName"
                          placeholder="Enter Project Name"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.projectName && !values.projectName
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="projectName"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Branch
                        </label>

                        <Field
                          type="text"
                          name="branch"
                          placeholder="Enter Branch Name"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${touched.branch && !values.branch ? "border-meta-1" : "border-primary"}
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="branch"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex mb-4.5">
                      <div className="w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Client Name
                        </label>

                        <Field
                          type="text"
                          name="clientName"
                          placeholder="Enter Client Name"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.clientName && !values.clientName
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="clientName"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>

                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Client Email
                        </label>

                        <Field
                          type="text"
                          name="clientEmail"
                          placeholder="Enter Client Email"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.clientEmail && !values.clientEmail
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="clientEmail"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex mb-4.5">
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Client Address
                        </label>

                        <Field
                          type="text"
                          name="clientAddress"
                          placeholder="Enter Client Address"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.clientAddress && !values.clientAddress
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="clientAddress"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>

                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Client Phone
                        </label>

                        <Field
                          type="text"
                          name="clientPhone"
                          placeholder="Enter Client Phone"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.clientPhone && !values.clientPhone
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="clientPhone"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex mb-4.5">
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Senior Manager
                        </label>

                        <Field
                          type="text"
                          name="seniorManager"
                          placeholder="Enter  Senior Manager"
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.seniorManager && !values.seniorManager
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="seniorManager"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          BDG Member
                        </label>

                        <Field
                          type="text"
                          name="bdgMember"
                          placeholder="Enter BDG Member "
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.bdgMember && !values.bdgMember
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="bdgMember"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex mb-4.5">
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Manager
                        </label>

                        <Field
                          type="text"
                          name="manager"
                          placeholder="Enter Manager "
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${touched.manager && !values.manager ? "border-meta-1" : "border-primary"}
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="manager"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Tech
                        </label>
                        <Field
                          type="text"
                          name="tech"
                          placeholder="Enter Tech "
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${touched.tech && !values.tech ? "border-meta-1" : "border-primary"}
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />
                        <ErrorMessage
                          name="tech"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex mb-4.5">
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Start Date
                        </label>

                        <Field
                          type="date"
                          name="startDate"
                          placeholder="Enter Start Date "
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${
      touched.startDate && !values.startDate
        ? "border-meta-1"
        : "border-primary"
    }
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="startDate"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                      <div className="w-1/2 pl-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          End Date
                        </label>

                        <Field
                          type="date"
                          name="endDate"
                          placeholder="Enter End Date "
                          className={`
    w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
    focus:border-blue-500
    ${touched.endDate && !values.endDate ? "border-meta-1" : "border-primary"}
    disabled:cursor-default disabled:bg-white dark:border-form-strokedark
    dark:bg-form-input dark:focus-border-primary
  `}
                        />

                        <ErrorMessage
                          name="endDate"
                          component="div"
                          className="text-meta-1 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex mb-4.5">
                      <div className="w-1/2 pr-4">
                        <label className="mb-2.5 block text-black dark:text-white">
                          PO
                        </label>
                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                          <Field
                            as="select"
                            className={`
                            w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
                            focus:border-blue-500
                            ${
                              touched.po && !values.po
                                ? "border-meta-1"
                                : "border-primary"
                            }
                            disabled:cursor-default disabled:bg-white dark:border-form-strokedark
                            dark:bg-form-input dark:focus-border-primary
                          `}
                            name="po"
                          >
                            <option value="">Po</option>
                            {data.map((item) => (
                              <option key={item._id} value={item._id}>
                                {item.name}
                              </option>
                            ))}
                          </Field>

                          <ErrorMessage
                            name="po"
                            component="div"
                            className="text-meta-1 text-sm"
                          />

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
                          <Field
                            as="select"
                            className={`
                            w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
                            focus:border-blue-500
                            ${
                              touched.scrumMaster && !values.scrumMaster
                                ? "border-meta-1"
                                : "border-primary"
                            }
                            disabled:cursor-default disabled:bg-white dark:border-form-strokedark
                            dark:bg-form-input dark:focus-border-primary
                          `}
                            name="scrumMaster"
                          >
                            <option value="">Scrum Master</option>
                            {data.map((item) => (
                              <option key={item._id} value={item._id}>
                                {item.name}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="scrumMaster"
                            component="div"
                            className="text-meta-1 text-sm"
                          />

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

                    <div className="relative z-20 bg-transparent dark.bg-form-input">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Select Team Members
                      </label>
                      <Field
                        as="select"
                        className={`
                        w-full rounded border-[1.5px] bg-transparent py-3 px-5 font-medium outline-none transition
                        focus:border-blue-500
                        ${
                          touched.team && !values.team
                            ? "border-meta-1"
                            : "border-primary"
                        }
                        disabled:cursor-default disabled:bg-white dark:border-form-strokedark
                        dark:bg-form-input dark:focus-border-primary
                      `}
                        name="team"
                        onChange={handleTeamMemberSelection}
                      >
                        <option value="">Select Team Member</option>
                        {data.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="team"
                        component="div"
                        className="text-meta-1 text-sm"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Selected Team Members
                      </label>
                      {/* <div className="flex flex-wrap items-center">
                        {selectedTeamMembers.map((member) => (
                          <div
                            key={member._id}
                            className="flex items-center m-1 px-3 py-2 bg-meta-3 text-white rounded-full text-sm"
                          >
                            {member.name}
                            <button
                              type="button"
                              onClick={() =>
                                removeSelectedTeamMember(member._id)
                              }
                              className="ml-2 text-xs font-medium cursor-pointer"
                            ></button>
                          </div>
                        ))}
                      </div> */}


                      <div className="flex flex-wrap items-center">
                    {selectedTeamMembers.map((member) => (
                      <span
                        key={member._id}
                        value={values.team}
                       // onChange={handleCreateUser}
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
                    <div className="mt-4.5">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Upload Project Document
                      </label>
                      <input
                        type="file"
                        //accept=".pdf, .doc, .docx"
                        name="projectDocument"
                        onChange={handleprojectDocument}
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white"
                    >
                      Add Project
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
