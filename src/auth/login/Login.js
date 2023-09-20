import loginImage from "../../assets/img/loginImage.jpg";
import logo from "../../assets/img/logo.svg";
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
  console.log("url", url);

  const handleLogin = async (values) => {
    console.log("values", values);
    const response = await dispatch(authActions.login(values));
    if (authActions.login.fulfilled.match(response)) {
      toast.success("Login successful!");
  } else {
    toast.error("An error occurred while logged in.")
  }
    console.log(response)
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
  };

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
    <center>
      <form onSubmit={formik.handleSubmit}>
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
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <img src={loginImage} alt="login" />
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <img
                src={logo}
                className="mb-4"
                style={{ height: "50px" }}
                alt="logo"
              />
              <div class="relative mb-4">
                <label
                  for="full-name"
                  class="leading-7 text-sm text-gray-600"
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  class={`w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  name="email"
                  placeholder="Enter your email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div class="relative mb-4">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-600"
                  style={{ display: "flex", justifyContent: "right" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class={`w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  name="password"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  aria-describedby="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
              <button
                class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                type="submit"
              >
                Login
              </button>
              <div className="acb" style={{ marginTop: "20px" }}>
                <Link onClick={(e) => e.target.value} to="/ForgotPassword">
                  <a href="#!" className="fw-bold text-body">
                    <u>ForgotPassword</u>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </form>
    </center>
  );
};

export default Login;
