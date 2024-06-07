/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const yearList = [];
const monthList = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const currentYear = new Date().getFullYear();
for (let i = 0; i < 15; i++) {
  yearList.push(currentYear + i);
}

export default function CardHookForm({ submitFn, editFn, initialData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: Object.keys(initialData).length
      ? initialData
      : {
          card_no: "",
          expire_month: "",
          expire_year: "",
          name_on_card: "",
          cvv: "",
        },
    mode: "all",
  });

  return (
    <>
      <form
        className="flex flex-col gap-6 mx-auto items-center justify-center w-full mb-10"
        onSubmit={
          Object.keys(initialData).length
            ? handleSubmit(editFn)
            : handleSubmit(submitFn)
        }
      >
        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray w-[450px] sm:w-[300px] mb-0"
            htmlFor="card_no"
          >
            Card No
          </label>
          <div>
            <input
              className="border border-secondary rounded h-10 text-darkgray w-full"
              id="card_no"
              type="text"
              placeholder="Card No"
              {...register("card_no", {
                required: "Card No is required",
              })}
            />
          </div>
          {errors.card_no && (
            <p className="text-red-500">{errors.card_no.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray md: w-[450px] sm:w-[300px]"
            htmlFor="expire_month"
          >
            Expiry Month
          </label>
          <select
            name="expire_month"
            id="expire_month"
            className="border border-secondary rounded w-full md:w-[450px] sm:w-[300px] h-10 text-darkgray"
            value={watch("expire_month")}
            {...register("expire_month", {
              required: "Expire Month is required",
            })}
          >
            {monthList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray md: w-[450px] sm:w-[300px]"
            htmlFor="expire_year"
          >
            Expiry Year
          </label>
          <select
            name="expire_year"
            id="expire_year"
            className="border border-secondary rounded w-full md:w-[450px] sm:w-[300px] h-10 text-darkgray"
            value={watch("expire_year")}
            {...register("expire_year", {
              required: "Expire Year is required",
            })}
          >
            {yearList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray md: w-[450px] sm:w-[300px]"
            htmlFor="name_on_card"
          >
            Name on card
          </label>
          <div>
            <input
              className="border border-secondary rounded w-full md:w-[450px] sm:w-[300px] h-10 text-darkgray"
              id="name_on_card"
              type="text"
              placeholder="Name on card"
              {...register("name_on_card", {
                required: "Name is required",
              })}
            />
          </div>
          {errors.name_on_card && (
            <p className="text-red-500">{errors.name_on_card.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray md: w-[450px] sm:w-[300px]"
            htmlFor="cvv"
          >
            CVV *
          </label>
          <div>
            <input
              className="border border-secondary rounded w-full md:w-[450px] sm:w-[300px] h-10 text-darkgray"
              id="cvv"
              type="text"
              placeholder="CVV"
              {...register("cvv", {
                pattern: {
                  value: /^\d{3}$/,
                  message: "CVV is invalid",
                },
                required: "CVV is required",
              })}
            />
          </div>
          {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
        </div>

        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <div className="mx-auto w-full">
            <button
              className="w-full bg-primary text-white font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-300"
              type="submit"
              disabled={!isValid}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
