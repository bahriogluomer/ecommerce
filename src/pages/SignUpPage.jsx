import Axios from "axios";
import { useForm } from "react-hook-form";

const axiosInstance = Axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const initialForm = {
  email: "",
  password: "",
  role_id: "customer",
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialForm });

  function onFormSubmit(formData) {
    console.log("form data:", formData);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center my-60">
        <h1 className="font-bold text-2xl text-center text-darkgray my-12">
          Signup Form
        </h1>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col w-[600px] gap-6 text-secondary md:w-[400px] sm:w-[360px]"
        >
          <label htmlFor="email" className="font-semibold">
            E-mail
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border rounded-md p-2 bg-lightgray1"
          />
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="border rounded-md p-2 bg-lightgray1"
          />
          <label htmlFor="confirm-password" className="font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirm-password", { required: true })}
            className="border rounded-md p-2 bg-lightgray1"
          />
          {/* {errors.lastName && <p>Last name is required.</p>} */}

          <label htmlFor="role" className="font-semibold">
            Role
          </label>
          <select
            name="role_id"
            id="role"
            defaultValue={"customer"}
            className="border rounded-md p-2 bg-lightgray1"
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="store">Store</option>
          </select>
          <button
            className="px-8 py-3 rounded bg-primary font-semibold text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
