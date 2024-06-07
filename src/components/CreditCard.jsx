/* eslint-disable react/prop-types */

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreditCardCard({ data, handleEdit, handleDelete }) {
  let cardNoWithSpaces = "";
  for (let i = 1; i < data.card_no.length + 1; i++) {
    cardNoWithSpaces += data.card_no[i - 1];
    if (i % 4 === 0) cardNoWithSpaces += " ";
  }
  let censoredCardNumber =
    cardNoWithSpaces.slice(0, 5) + "**** **** **" + cardNoWithSpaces.slice(17);

  return (
    <div className="w-[45%] md:w-[80%] min-w-[320px]">
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-1">
          <input type="radio" id={data.id} name={"Card"} value={data.id} />
          <label htmlFor={data.id}>{"Card " + data.id}</label>
          <br />
        </div>
        <div className="flex gap-4">
          <button
            id={data.id}
            onClick={handleEdit}
            className="hover:text-darkgray"
          >
            Edit
          </button>
          <button
            id={data.id}
            onClick={() => handleDelete(data.id)}
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <div className="w-full">
        <label className="w-full" htmlFor={data.id}>
          <div className="border rounded bg-gradient-to-br from-primary to-lightgray1 w-[380px] h-[200px] sm:w-[300px] flex flex-col justify-end items-end text-darkgray px-4 py-5">
            <div className="text-center text-xl flex flex-col justify-end items-start">
              <p>{data.name_on_card}</p>
              <p>{censoredCardNumber}</p>
              <p>
                {data.expire_month}/{data.expire_year}
              </p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
