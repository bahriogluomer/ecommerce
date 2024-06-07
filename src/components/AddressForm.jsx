/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { getCities, getDistrictsByCityCode } from "turkey-neighbourhoods";

export default function AddressForm({ submitFn, editFn, initialData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: Object.keys(initialData).length
      ? initialData
      : {
          title: "",
          name: "",
          surname: "",
          phone: "",
          city: "",
          district: "",
          neighborhood: "",
          address: "",
        },
    mode: "all",
  });

  const cities = getCities();
  const citySelected = watch("city");
  const districts = getDistrictsByCityCode(citySelected);
  return (
    <>
      <form
        className="flex flex-col gap-6 mx-auto items-center p-5 justify-center max-w-[960px]"
        onSubmit={
          Object.keys(initialData).length
            ? handleSubmit(editFn)
            : handleSubmit(submitFn)
        }
      >
        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray w-[450px] sm:w-[300px] mb-0"
            htmlFor="title"
          >
            Address Title
          </label>
          <div>
            <input
              className="border border-secondary rounded h-10 text-darkgray w-full"
              id="title"
              type="text"
              placeholder="Address Title"
              {...register("title", {
                required: "Address title is required",
              })}
            />
          </div>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="flex md:flex-col gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-darkgray w-[450px] sm:w-[300px]"
              htmlFor="name"
            >
              Name
            </label>
            <div>
              <input
                className="border border-secondary rounded h-10 text-darkgray w-full"
                id="name"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-darkgray w-[450px] sm:w-[300px]"
              htmlFor="surname"
            >
              Surname
            </label>
            <div>
              <input
                className="border border-secondary rounded h-10 text-darkgray w-full"
                id="surname"
                type="text"
                placeholder="Surname"
                {...register("surname", {
                  required: "Surname is required",
                })}
              />
            </div>
            {errors.surname && (
              <p className="text-red-500">{errors.surname.message}</p>
            )}
          </div>
        </div>
        <div className="flex items-center md:flex-col gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-darkgray w-[450px] md:w-[400px] sm:w-[300px]"
              htmlFor="city"
            >
              City
            </label>
            <select
              name="city"
              id="city"
              className="border border-secondary rounded h-10 text-darkgray w-full"
              value={watch("city")}
              {...register("city", {
                required: "City is required",
              })}
            >
              {cities.map((item, index) => {
                return (
                  <option key={index} value={item.code}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-darkgray w-[450px] sm:w-[300px] "
              htmlFor="district"
            >
              District
            </label>
            <select
              disabled={citySelected === "" ? true : false}
              name="district"
              id="district"
              className="border border-secondary rounded h-10 text-darkgray w-full disabled:bg-light-gray-1"
              value={watch("district")}
              {...register("district", {
                required: "District is required",
              })}
            >
              {districts.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex md:flex-col gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-darkgray w-[450px] sm:w-[300px]"
              htmlFor="phone"
            >
              Phone
            </label>
            <div>
              <input
                className="border border-secondary rounded h-10 text-darkgray w-full"
                id="phone"
                type="text"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value:
                      /^(?:\+90.?5|0090.?5|905|0?5)(?:[01345][0-9])\s?(?:[0-9]{3})\s?(?:[0-9]{2})\s?(?:[0-9]{2})$/,
                    message: "Invalid phone number",
                  },
                })}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              className="text-darkgray w-[450px] sm:w-[300px]"
              htmlFor="neighborhood"
            >
              Neighborhood
            </label>
            <div>
              <input
                className="border border-secondary rounded h-10 text-darkgray w-full"
                id="neighborhood"
                type="text"
                placeholder="Neighborhood"
                {...register("neighborhood", {
                  required: "Neighborhood is required",
                })}
              />
            </div>
            {errors.neighborhood && (
              <p className="text-red-500">{errors.neighborhood.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full md:w-[450px] sm:w-[300px]">
          <label
            className="text-darkgray w-[450px] sm:w-[300px] mb-0"
            htmlFor="address"
          >
            Address
          </label>
          <div>
            <textarea
              className="border border-secondary rounded h-10 text-darkgray w-full"
              id="address"
              placeholder="Address"
              {...register("address", {
                required: "Address is required",
              })}
            />
          </div>
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[450px] sm:w-[300px]">
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
