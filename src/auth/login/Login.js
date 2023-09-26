import loginImage from "../../assets/img/loginImage.jpg";
import logo from "../../assets/img/logo.svg";
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../assets/img/logo.svg';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authActions } from "../../store/slice";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();



  // const count = useSelector((state) => state.counter.value)

const url = process.env.REACT_APP_API_URL;
  

  const handleLogin = async (values) => {
    console.log("values", values);
    const response = await dispatch(authActions.login(values));
    if (authActions.login.fulfilled.match(response)) {
      toast.success("Login successful!");
      console.log("respomse",response)
      localStorage.setItem('islogin', true);
         localStorage.setItem('token', response.payload.data.data.loginToken);
        localStorage.setItem("userInfo",  JSON.stringify(response.payload.data.data.userRecords))
       
      navigate('/admin')
   
  } else {
    toast.error("An error occurred while logged in.")
  }
    console.log(response)
 
  };
   // axios
    //   .post(`${url}/loginUser`, values)
    //   .then((res) => {
    //     console.log("res", res);
    //     if (res.status === 200) {
    //       toast.success("Login successful!");
    //     } else {
    //       toast.error("Login failed. Invalid credentials.");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error("An error occurred while logged in.");
    //   });
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()

      // .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    // <center>
    //   <form onSubmit={formik.handleSubmit}>
    //     <ToastContainer
    //       position="top-right"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="light"
    //     />
    //     <section class="text-gray-600 body-font">
    //       <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    //         <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
    //           <img src={loginImage} alt="login" />
    //         </div>
    //         <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
    //           <img
    //             src={logo}
    //             className="mb-4"
    //             style={{ height: "50px" }}
    //             alt="logo"
    //           />
    //           <div class="relative mb-4">
    //             <label
    //               for="full-name"
    //               class="leading-7 text-sm text-gray-600"
    //               style={{ display: "flex", justifyContent: "right" }}
    //             >
    //               User Name
    //             </label>
    //             <input
    //               type="text"
    //               id="full-name"
    //               class={`w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
    //                 formik.touched.email && formik.errors.email
    //                   ? "border-red-500"
    //                   : ""
    //               }`}
    //               name="email"
    //               placeholder="Enter your email"
    //               autoFocus
    //               value={formik.values.email}
    //               onChange={formik.handleChange}
    //               onBlur={formik.handleBlur}
    //             />
    //             {formik.touched.email && formik.errors.email && (
    //               <div className="text-red-500">{formik.errors.email}</div>
    //             )}
    //           </div>
    //           <div class="relative mb-4">
    //             <label
    //               for="email"
    //               class="leading-7 text-sm text-gray-600"
    //               style={{ display: "flex", justifyContent: "right" }}
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               id="password"
    //               class={`w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
    //                 formik.touched.password && formik.errors.password
    //                   ? "border-red-500"
    //                   : ""
    //               }`}
    //               name="password"
    //               placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
    //               aria-describedby="password"
    //               value={formik.values.password}
    //               onChange={formik.handleChange}
    //             />
    //             {formik.touched.password && formik.errors.password && (
    //               <div className="text-red-500">{formik.errors.password}</div>
    //             )}




    //           </div>



    //           <div className="flex items-center">
    //             <input
    //               id="remember-me"
    //               name="remember-me"
    //               type="checkbox"
    //               className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
    //             />
    //             <label
    //               htmlFor="remember-me"
    //               className="ml-2 block text-sm text-gray-900"
    //             >
    //               {" "}
    //               Remember me{" "}
    //             </label>
    //           </div>
    //           <br/>
    //           <button
    //             class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
    //             type="submit"
    //           >
    //             Login
    //           </button>
    //           <div className="acb" style={{ marginTop: "20px" }}>
    //             <Link onClick={(e) => e.target.value} to="/ForgotPassword">
    //               <a href="#!" className="fw-bold text-body">
    //                 <u>ForgotPassword</u>
    //               </a>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </form>
    // </center>
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="flex flex-wrap items-center">
      <div className="hidden w-full xl:block xl:w-1/2">
        <div className="py-17.5 px-26 text-center">
          {/* <Link className="mb-5.5 inline-block" to="/">
            <img  src={Logo} alt="Logo" />
            <img className="dark:hidden" src={Logo} alt="Logo" />
          </Link> */}
          <span className="mt-15 inline-block">
           <img src={loginImage} alt="login"/>
          </span>
        </div>
      </div>

      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Sign In to Vp-Portal
          </h2>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email/Username
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email/username"
                  // className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  id="email"
                  name="email"
                 
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                
                />
 {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                <span className="absolute right-4 top-4">
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="enter you password"
                  className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  id="password"
                  name="password"
                 
                  autoFocus
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                
                />
{formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  )}
                <span className="absolute right-4 top-4">
                  <svg
                    className="fill-current"
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
                      />
                      <path
                        d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-5">
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              />
            </div>
            <div className="mt-6 text-center">
              <p>
                Forgot your password?{' '}
                <Link to="/ForgotPassword" className="text-primary">
                  Forgot Password
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
