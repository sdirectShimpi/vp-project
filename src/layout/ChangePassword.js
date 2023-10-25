import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const [state, setState] = useState({
   
    password: "",
    newPassword: "",
    confirmPassword:""

  });

  const handelInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();
    const userinfo = JSON.parse(localStorage.getItem("userInfo"));
    let userId = userinfo[0]._id;
    // let password = userinfo[0].password
    // console.log("userId",userinfo[0].password)
    if(state.newPassword!== state.confirmPassword)
    {
        toast.error("Passwords must match");
       
    }else{
    axios
      .post("http://localhost:3010/api/v1/changePassword", {...state ,userId })
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          toast.success("Change Password successful!");
        } else {
          toast.error(" Change Password failed. Invalid credentials.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while Change Password  in.");
      });
    }
  };

  return (
    <>
   <div class="flex flex-col gap-9">
              
                <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div class="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 class="font-medium text-black dark:text-white">
                    Change Password
                    </h3>
                  </div>
                  <form>
                  <div class="flex flex-col gap-5.5 p-6.5">
                    <label class="mb-2.5 block font-medium text-black dark:text-white">
                     Current  Password
                    </label>
                    <div class="relative">
                      <input
                        type="password"
                        placeholder="6+ Characters, 1 Capital letter"
                        name="password"
                        value={state.password}
                        onChange={handelInput}
                        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span class="absolute right-4 top-4">
                        <svg
                          class="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.5">
                            <path
                              d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                              fill=""
                            ></path>
                            <path
                              d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-col gap-5.5 p-6.5">
                    <label class="mb-2.5 block font-medium text-black dark:text-white">
                      New Password
                    </label>
                    <div class="relative">
                      <input
                        type="password"
                        name="newPassword"
                        value={state.newPassword}
                        onChange={handelInput}
                        placeholder="6+ Characters, 1 Capital letter"
                        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span class="absolute right-4 top-4">
                        <svg
                          class="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.5">
                            <path
                              d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                              fill=""
                            ></path>
                            <path
                              d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>



                  <div class="flex flex-col gap-5.5 p-6.5">
                    <label class="mb-2.5 block font-medium text-black dark:text-white">
                     Confirm Paassword
                    </label>
                    <div class="relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={state.confirmPassword}
                        onChange={handelInput}
                        placeholder="6+ Characters, 1 Capital letter"
                        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span class="absolute right-4 top-4">
                        <svg
                          class="fill-current"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.5">
                            <path
                              d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                              fill=""
                            ></path>
                            <path
                              d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                              fill=""
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>









                  <div class="flex flex-col gap-10.10 p-10.5">
                    <input
                      type="submit"
                      onClick={handleChangePassword}
                      value="Change Password"
                      class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                    />
                  </div>

                  

                  
                </form>

                  {/* <div class="flex flex-col gap-5.5 p-6.5">
                    <div>
                      <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Default Input
                      </label>
                      <input type="text" placeholder="Default Input" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"/>
                    </div>

                    <div>
                      <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Active Input
                      </label>
                      <input type="text" placeholder="Active Input" class="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"/>
                    </div>

                    <div>
                      <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                        Disabled label
                      </label>
                      <input type="text" placeholder="Disabled label" disabled="" class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"/>
                    </div>
                  </div> */}
                </div>



             
               
               
                    

                    


               
                
              </div>

    </>
  );
};

export default ChangePassword;
