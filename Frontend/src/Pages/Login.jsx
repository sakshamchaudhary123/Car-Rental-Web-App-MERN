import React from "react";
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form";

import axios from "axios";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthProvider";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth(); // Destructure login from Auth Context

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successful");
          closeModal();
          setTimeout(() => {
            window.location.reload(); // reload the page
          }, 1000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // only for user data not message
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              id="close_modal_3"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg mb-4 ">Login</h3>
            {/* Email */}
            <div className="space-y-2 ">
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                className="md:w-80 border outline-none rounded-md px-2 py-1 "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="space-y-2 mt-2">
              <label htmlFor="password">Password</label> <br />
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="md:w-80 border outline-none rounded-md px-2 py-1 "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex space-x-4 md:justify-around my-6">
              <button
                type="submit"
                className="px-2 py-1 bg-pink-600 text-white hover:bg-pink-700 rounded-md cursor-pointer"
              >
                Login
              </button>
              <div>
                <span>Not have an account? </span>
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
