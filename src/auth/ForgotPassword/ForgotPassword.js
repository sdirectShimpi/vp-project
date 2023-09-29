import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/img/logo.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = (values) => {
    axios
      .post("http://localhost:3030/api/v1/resetPassword", values)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          toast.success("resetPassword successful!");
        } else {
          toast.error(" esetPassword failed. Invalid credentials.");
        }

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while resetPassword in.");
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleForgotPassword(values);
    },
  });

  return (
    <center>
      <div
        className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: "rgb(243 244 246)",
          width: "fit-content",
          marginTop: "5%",
          border: "2px solid #000"
        }}
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Forgot your password?{" "}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link to={"/"}>
                <a
                  href="/"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  {" "}
                  Login{" "}
                </a>
              </Link>{" "}
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-8 space-y-6"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              {/* <div>
              <label htmlFor="email" className="sr-only">Email </label>
              <input value=""  id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            */}
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

            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div> */}

              {/* <div className="text-sm">
              <Link to={'/forgot'}><a href="/" className="font-medium text-red-600 hover:text-red-500"> Forgot your password? </a></Link>
            </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                // className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-red-500 group-hover:text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                ForgotPassword
              </button>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
};

export default ForgotPassword;
