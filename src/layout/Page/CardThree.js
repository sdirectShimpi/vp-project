import { useState,useEffect } from "react";
import axios  from "axios";



const CardThree = () => {


  const [activeProject, setActiveProject] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  const getProject= async () => {
    try {
      const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    const userId = userinfo[0]._id;
      const response = await axios.get(`${baseUrl}/getPorjectRecord/${userId}`);
      console.log("gkhjkioplikp",response.data.data.data[0].activeProject)
      setActiveProject(response.data.data.data[0].activeProject);

    } catch (err) {
      console.log(err);
    }
  };
  console.log("totalProject", activeProject)

  useEffect(() => {
    getProject()
    }, []);


    return (
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {/* <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
              fill=""
            />
            <path
              d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
              fill=""
            />
          </svg> */}

<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.8752 24.65H31.5564V9.19062C31.5564 7.96875 30.5471 6.90625 29.2721 6.90625H26.4033C25.1814 6.90625 24.1189 7.91562 24.1189 9.19062V24.65H20.7189V12.1656C20.7189 10.9437 19.7096 9.88125 18.4346 9.88125H15.5658C14.3439 9.88125 13.2814 10.8906 13.2814 12.1656V24.65H9.82832V15.6187C9.82832 14.3969 8.81895 13.3344 7.54395 13.3344H4.6752C3.45332 13.3344 2.39082 14.3437 2.39082 15.6187V24.65H2.1252C1.4877 24.65 0.90332 25.1813 0.90332 25.8719C0.90332 26.5625 1.43457 27.0938 2.1252 27.0938H31.8752C32.5127 27.0938 33.0971 26.5625 33.0971 25.8719C33.0971 25.1813 32.5127 24.65 31.8752 24.65ZM4.83457 24.65V15.7781H7.4377V24.65H4.83457ZM15.6721 24.65V12.325H18.2752V24.65H15.6721ZM26.5627 24.65V9.35H29.1658V24.65H26.5627V24.65Z" fill="#3C50E0"></path>
                </svg>
          
        </div>
  
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
             {activeProject}
            </h4>
            <span className="text-sm font-medium">Active Project</span>
          </div>
  
          {/* <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          {activeProject}
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          </span> */}
        </div>
      </div>
    );
  };
  
  export default CardThree;
  