import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { loginRequest } from "../../../features/admin/auth/auth-thunks";

export default function Login() {
  // initialization
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // prettier-ignore
  const {  formState: { errors } } = useForm();
  const { register, handleSubmit } = useForm();

  // getting states
  const { isAuthenticated, status, error } = useSelector(
    (state) => state.admin.auth,
  );

  // methods
  const onSubmit = (data) => {
    dispatch(loginRequest(data));
  };

  // navigate to dashboard if authenticated
  useEffect(() => {
    isAuthenticated && navigate("/admin");
  }, [isAuthenticated]);

  return (
    <div className="h-screen max-h-[100vh] w-screen max-w-[100vw] overflow-hidden border font-inter">
      <aside className="bg-r-custom-primary-light absolute left-[-250px] top-0 z-50 h-screen w-[250px] border-r border-dashed border-custom-border-light px-3 lg:left-0" />
      <main className="relative flex h-screen max-w-[100%] flex-col lg:left-[250px] lg:w-[calc(100%-250px)]">
        <header className="flex h-[60px] w-full flex-shrink-0 items-center justify-between border-b border-dashed px-2">
          <img className="h-6" src={logo} alt="Logo" />
        </header>
        <section className="relative flex-grow overflow-y-scroll">
          <section className="flex h-full items-center justify-center lg:w-[calc(100%-250px)]">
            <div className="w-full border border-dashed border-custom-border-light p-4 lg:w-auto">
              <h2 className="text-xl font-bold">Login</h2>
              <p className="mt-1 text-xs">
                {status === "loading"
                  ? "Loading... Please wait."
                  : status === "failed"
                    ? "Failed to load. Try again later."
                    : "Enter your email below to login to your account."}
              </p>
              <form
                className="mt-3 flex flex-col lg:min-w-80"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="relative">
                  <svg
                    className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  <input
                    type="email"
                    placeholder="example@domain.com"
                    className="w-full rounded-md border border-custom-border-light bg-custom-secondary-light py-2 pl-8 focus:outline-slate-300"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mx-1 my-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}

                <div className="relative mt-2">
                  <svg
                    className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                    <circle cx="16.5" cy="7.5" r=".5" />
                  </svg>
                  <input
                    type="password"
                    placeholder="•••••••••••"
                    className="w-full rounded-md border border-custom-border-light bg-custom-secondary-light py-2 pl-8 focus:outline-slate-300"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="mx-1 my-1 text-xs text-red-600">
                    {errors.password.message}
                  </p>
                )}

                <button className="mt-2 w-full rounded-md bg-slate-800 py-2.5 text-sm font-semibold text-custom-text-highlight-light">
                  Login Now
                </button>
              </form>
            </div>
          </section>
          <section className="absolute right-0 top-0 h-full border-l border-dashed border-custom-border-light lg:w-[250px]" />
        </section>
      </main>
    </div>
  );
}
