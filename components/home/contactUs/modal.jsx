import React from "react";

export default function Modal({ show }) {
  return (
    <div className=" bg-white shadow-xl px-8 py-5 rounded-md border-2 border-pds">
      <p className="pb-5">Zpráva úspěšně odeslána.</p>
      <div
        type=""
        onClick={show}
        className=" cursor-pointer w-2/6 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Ok
      </div>
    </div>
  );
}
