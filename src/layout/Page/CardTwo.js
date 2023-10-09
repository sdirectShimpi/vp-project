import { useState,useEffect } from "react";
import axios  from "axios";


const CardTwo = () => {




  const [totalExprince, setTotalExprince] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  const getProject= async () => {
    try {
      const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    const userId = userinfo[0]._id;
      const response = await axios.get(`${baseUrl}/getUser/${userId}`);
      //console.log("await",response.data.data.productRecords[0].projectDetails.totalProject)
      setTotalExprince(response.data.data.totalExprince);

    } catch (err) {
      console.log(err);
    }
  };
 

  useEffect(() => {
    getProject()
    }, []);

    
    return (
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.1027 15.5125C14.3965 15.5125 17.1059 12.9093 17.1059 9.6687C17.1059 6.42808 14.3965 3.82495 11.1027 3.82495C7.80898 3.82495 5.09961 6.42808 5.09961 9.6687C5.09961 12.9093 7.80898 15.5125 11.1027 15.5125ZM11.1027 6.2687C13.0684 6.2687 14.7152 7.80933 14.7152 9.72183C14.7152 11.6343 13.1215 13.175 11.1027 13.175C9.08398 13.175 7.49023 11.6343 7.49023 9.72183C7.49023 7.80933 9.13711 6.2687 11.1027 6.2687Z" fill="#10B981"></path>
                  <path d="M24.4373 18.0625C27.3061 18.0625 29.5904 15.8313 29.5904 13.0156C29.5904 10.2 27.2529 7.96875 24.4373 7.96875C21.6217 7.96875 19.2842 10.2 19.2842 13.0156C19.2842 15.8313 21.6217 18.0625 24.4373 18.0625ZM24.4373 10.4125C25.9779 10.4125 27.1998 11.5813 27.1998 13.0688C27.1998 14.5563 25.9779 15.725 24.4373 15.725C22.8967 15.725 21.6748 14.5563 21.6748 13.0688C21.6748 11.5813 22.8967 10.4125 24.4373 10.4125Z" fill="#10B981"></path>
                  <path d="M24.7029 18.5937H24.2248C22.6311 18.5937 21.0904 19.0718 19.7623 19.8687C18.3279 17.9562 16.0436 16.6812 13.4936 16.6812H8.76543C4.40918 16.7343 0.956055 20.1874 0.956055 24.4905V28.3155C0.956055 29.3249 1.75293 30.1218 2.7623 30.1218H31.2904C32.2998 30.1218 33.1498 29.2718 33.1498 28.2624V26.9874C33.0967 22.3655 29.3248 18.5937 24.7029 18.5937ZM3.34668 27.7312V24.4905C3.34668 21.5155 5.79043 19.0718 8.76543 19.0718H13.4936C16.4686 19.0718 18.9123 21.5155 18.9123 24.4905V27.7312H3.34668V27.7312ZM30.7061 27.7312H21.2498V24.4905C21.2498 23.6405 21.0904 22.7905 20.8248 21.9937C21.7811 21.303 22.9498 20.9843 24.1717 20.9843H24.6498C27.9436 20.9843 30.6529 23.6937 30.6529 26.9874V27.7312H30.7061Z" fill="#10B981"></path>
                </svg>
        </div>
  
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
            {totalExprince}
            </h4>
            <span className="text-sm font-medium">Total Experience</span>
          </div>
{/*   
          <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
             {totalExprince}
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
  
  export default CardTwo;
  