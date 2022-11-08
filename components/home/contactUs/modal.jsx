import React from "react";

export default function Modal() {
  return (
    <div className=" bg-white shadow-xl py-5">
      <p className="pb-5">Zprava uspesne odeslana</p>
      <button className=" w-2/6 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Ok
      </button>
    </div>
  );
}
