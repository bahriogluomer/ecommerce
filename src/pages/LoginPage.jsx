import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";

const initialForm = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialForm,
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  function onFormSubmit(formData) {
    dispatch(login(formData, history, setSubmitting));
  }

  return (
    <div className="flex flex-col items-center justify-center my-24">
      <h1 className="font-bold text-2xl text-center text-darkgray my-12">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col w-[600px] gap-6 text-secondary md:w-[400px] sm:w-[360px] xs:w-[300px]"
      >
        <label htmlFor="email" className="font-semibold">
          E-mail
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address.",
            },
          })}
          className="border rounded-md p-2 bg-lightgray1"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required.",
          })}
          className="border rounded-md p-2 bg-lightgray1"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          className="px-8 py-3 rounded bg-primary font-semibold text-white disabled:opacity-50"
          type="submit"
          disabled={!isValid || (isValid && submitting)}
        >
          <div className="flex items-center justify-center">
            {submitting ? <FaSpinner className="animate-spin mr-2" /> : null}
            {submitting ? "Submitting" : "Login"}
          </div>
        </button>
      </form>
      <button
        className="text-secondary mt-6"
        onClick={() => history.push("/signup")}
      >
        Don't have an account? Click to sign up.
      </button>
    </div>
  );
}
