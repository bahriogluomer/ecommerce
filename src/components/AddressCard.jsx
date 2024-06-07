/* eslint-disable react/prop-types */
import { faMobile, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddressBox({
  item,
  type,
  handleEdit,
  handleDelete,
  selectedShippingAddress,
}) {
  return (
    <div className={`w-[45%] md:w-[80%] min-w-[320px]`}>
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            id={type + item.id}
            name={type + "Address"}
            value={item.id}
          />
          <label htmlFor={type + item.id}>{item.title}</label>
          <br />
        </div>
        <div className="flex gap-4">
          <button
            id={item.id}
            onClick={handleEdit}
            className="hover:text-primary"
          >
            Edit
          </button>
          <button
            id={item.id}
            onClick={handleDelete}
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <div>
        <label htmlFor={type + item.id} className="block cursor-pointer">
          <div
            className={`w-full flex flex-col justify-center items-center rounded border mt-3 py-3 px-2 text-xs ${
              selectedShippingAddress === item
                ? "border border-primary bg-primary bg-opacity-10"
                : ""
            } `}
          >
            <div className="flex justify-between w-full ">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon className="text-primary" icon={faUser} />
                {item.name} {item.surname}
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon className="text-primary" icon={faMobile} />
                {item.phone}
              </div>
            </div>
            <div className="w-full font-semibold pt-2">{item.address}</div>
          </div>
        </label>
      </div>
    </div>
  );
}
