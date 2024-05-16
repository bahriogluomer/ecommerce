import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { axiosInstance } from "../axios/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { getRoles } from "../store/actions/globalActions";

const initialForm = {
  name: "",
  email: "",
  password: "",
  role_id: "3",
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

const iban_regex = new RegExp(
  "^AL\\d{10}[0-9A-Z]{16}$|^AD\\d{10}[0-9A-Z]{12}$|^AT\\d{18}$|^BH\\d{2}[A-Z]{4}[0-9A-Z]{14}$|^BE\\d{14}$|^BA\\d{18}$|^BG\\d{2}[A-Z]{4}\\d{6}[0-9A-Z]{8}$|^HR\\d{19}$|^CY\\d{10}[0-9A-Z]{16}$|^CZ\\d{22}$|^DK\\d{16}$|^FO\\d{16}$|^GL\\d{16}$|^DO\\d{2}[0-9A-Z]{4}\\d{20}$|^EE\\d{18}$|^FI\\d{16}$|^FR\\d{12}[0-9A-Z]{11}\\d{2}$|^GE\\d{2}[A-Z]{2}\\d{16}$|^DE\\d{20}$|^GI\\d{2}[A-Z]{4}[0-9A-Z]{15}$|^GR\\d{9}[0-9A-Z]{16}$|^HU\\d{26}$|^IS\\d{24}$|^IE\\d{2}[A-Z]{4}\\d{14}$|^IL\\d{21}$|^IT\\d{2}[A-Z]\\d{10}[0-9A-Z]{12}$|^[A-Z]{2}\\d{5}[0-9A-Z]{13}$|^KW\\d{2}[A-Z]{4}22!$|^LV\\d{2}[A-Z]{4}[0-9A-Z]{13}$|^LB\\d{6}[0-9A-Z]{20}$|^LI\\d{7}[0-9A-Z]{12}$|^LT\\d{18}$|^LU\\d{5}[0-9A-Z]{13}$|^MK\\d{5}[0-9A-Z]{10}\\d{2}$|^MT\\d{2}[A-Z]{4}\\d{5}[0-9A-Z]{18}$|^MR13\\d{23}$|^MU\\d{2}[A-Z]{4}\\d{19}[A-Z]{3}$|^MC\\d{12}[0-9A-Z]{11}\\d{2}$|^ME\\d{20}$|^NL\\d{2}[A-Z]{4}\\d{10}$|^NO\\d{13}$|^PL\\d{10}[0-9A-Z]{16}$|^PT\\d{23}$|^RO\\d{2}[A-Z]{4}[0-9A-Z]{16}$|^SM\\d{2}[A-Z]\\d{10}[0-9A-Z]{12}$|^SA\\d{4}[0-9A-Z]{18}$|^RS\\d{20}$|^SK\\d{22}$|^SI\\d{17}$|^ES\\d{22}$|^SE\\d{22}$|^CH\\d{7}[0-9A-Z]{12}$|^TN59\\d{20}$|^TR\\d{7}[0-9A-Z]{17}$|^AE\\d{21}$|^GB\\d{2}[A-Z]{4}\\d{14}$",
  "i"
);

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: initialForm,
  });

  const dispatch = useDispatch();
  const roles = useSelector((store) => store.global.roles);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const role = watch("role_id");

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  function onFormSubmit(formData) {
    // If not 'store', delete the store related fields from the data object
    if (formData.role_id !== "2") {
      delete formData.store;
    }
    delete formData.confirm_password;

    setSubmitting(true);
    axiosInstance
      .post("/signup", formData)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setSubmitting(false);
        reset(initialForm);
        history.goBack();
        toast.success(
          "Form submitted successfully! Check your email for activation."
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Form submission failed. ${err.message}`);
        setSubmitting(false);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center my-36 md:my-20">
      <h1 className="font-bold text-2xl text-center text-darkgray my-12">
        Signup Form
      </h1>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col w-[600px] gap-6 text-secondary md:w-[400px] sm:w-[360px] xs:w-[300px]"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-1">
            Name
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            {...register("name", {
              required:
                "Name field is required and cannot be shorter than 3 characters.",
              minLength: {
                value: 3,
                message: "Name cannot be shorter than 3 characters.",
              },
              maxLength: 20,
              pattern: {
                value: /^[A-Za-zçğıöşüÇĞİÖŞÜ ]+$/,
                message: "Name can only include letters.",
              },
            })}
            className="border rounded-md p-2 bg-lightgray1"
          />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-1">
          <label htmlFor="email" className="font-semibold">
            E-mail
          </label>
          <input
            placeholder="Enter your email"
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
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold mb-1">
            Password
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password cannot be shorter than 8 characters.",
              },
              maxLength: {
                value: 20,
                message: "Password cannot be longer than 20 characters.",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,.\\;':"-]).{8,}$/,
                message:
                  "Password must include at least one uppercase letter, one lowercase letter, one number, and one of the following special characters: !@#$%^&*()_+,.;':\"-",
              },
            })}
            className="border rounded-md p-2 bg-lightgray1"
          />
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="font-semibold mb-1">
            Confirm Password
          </label>
          <input
            placeholder="Confirm password"
            type="password"
            {...register("confirm_password", {
              required: true,
              validate: (value) => {
                if (watch("password") != value) {
                  return "Your passwords do no match";
                }
              },
            })}
            className="border rounded-md p-2 bg-lightgray1"
          />
          {errors.confirm_password && (
            <p className="text-red-500 mt-2">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="role" className="font-semibold mb-1">
            Role
          </label>
          <select
            name="role_id"
            id="role"
            defaultValue={roles[2]?.id}
            {...register("role_id", { required: true })}
            className="border rounded-md p-2 bg-lightgray1"
          >
            <option key={roles[2]?.id} value={roles[2]?.id}>
              {roles[2]?.code}
            </option>
            <option key={roles[0]?.id} value={roles[0]?.id}>
              {roles[0]?.code}
            </option>
            <option key={roles[1]?.id} value={roles[1]?.id}>
              {roles[1]?.code}
            </option>
          </select>
        </div>

        {role === "2" && (
          <>
            <div className="flex flex-col">
              <label htmlFor="store_name" className="font-semibold mb-1">
                Store Name
              </label>
              <input
                placeholder="Enter store name"
                type="text"
                {...register("store.name", {
                  required: true,
                  pattern: {
                    //Can store name include digits? If not, change the regex
                    value: /^[A-Za-zçğıöşüÇĞİÖŞÜ0-9 ]+$/,
                    message: "Please enter a valid store name.",
                  },
                  minLength: {
                    value: 3,
                    message: "Store name cannot be shorter than 3 characters.",
                  },
                  maxLength: {
                    value: 32,
                    message: "Store name cannot be longer than 32 characters.",
                  },
                })}
                className="border rounded-md p-2 bg-lightgray1"
              />
              {errors.store?.name && (
                <p className="text-red-500 mt-2">
                  {errors.store?.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-semibold mb-1">
                Store Phone Number
              </label>
              <input
                placeholder="Enter phone number"
                type="text"
                {...register("store.phone", {
                  required: true,
                  pattern: {
                    value:
                      /^(\+90|0)?\s*(\(\d{3}\)[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}|\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}|\(\d{3}\)[\s-]*\d{7}|\d{3}[\s-]*\d{3}[\s-]*\d{4}|\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2})$/,
                    message: "Please enter a valid phone number.",
                  },
                })}
                className="border rounded-md p-2 bg-lightgray1"
              />
              {errors.store?.phone && (
                <p className="text-red-500 mt-2">
                  {errors.store?.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="tax_no" className="font-semibold mb-1">
                Tax No
              </label>
              <input
                placeholder="Enter tax number"
                type="text"
                {...register("store.tax_no", {
                  required:
                    "Please enter a valid Tax ID that matches the pattern TXXXXVXXXXXX.",
                  maxLength: {
                    value: 12,
                    message: "Tax ID cannot be longer than 12 characters.",
                  },
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message:
                      "Store Tax ID must match the pattern TXXXXVXXXXXX where X are digits from 0 to 9.",
                  },
                })}
                className="border rounded-md p-2 bg-lightgray1"
              />
              {errors.store?.tax_no && (
                <p className="text-red-500 mt-2">
                  {errors.store?.tax_no.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="iban" className="font-semibold mb-1">
                IBAN
              </label>
              <input
                placeholder="Enter IBAN"
                type="text"
                {...register("store.bank_account", {
                  required: "IBAN is required.",
                  pattern: {
                    value: iban_regex,
                    message: "Please enter a valid IBAN number.",
                  },
                })}
                className="border rounded-md p-2 bg-lightgray1"
              />
              {errors.store?.bank_account && (
                <p className="text-red-500 mt-2">
                  {errors.store?.bank_account.message}
                </p>
              )}
            </div>
          </>
        )}
        <button
          className="px-8 py-3 rounded bg-primary font-semibold text-white disabled:opacity-50"
          type="submit"
          disabled={!isValid || (isValid && submitting)}
        >
          <div className="flex items-center justify-center">
            {submitting ? <FaSpinner className="animate-spin mr-2" /> : null}
            {submitting ? "Submitting" : "Submit"}
          </div>
        </button>
      </form>
      <button
        className="text-secondary mt-6"
        onClick={() => history.push("/login")}
      >
        Already have an account? Click to login.
      </button>
    </div>
  );
}
