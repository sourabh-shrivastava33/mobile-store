import React from "react";

const FormRow = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={label} className="capitalize font-bold text-[1rem] ">
        {label}
      </label>
      <input
        type={label === "price" ? "number" : "text"}
        id={label}
        value={value}
        onChange={onChange}
        className="h-8 w-[80%] border-2 border-gray-300 rounded-md p-4 text-[1.1rem] focus:outline-none"
      />
    </div>
  );
};

export default FormRow;
