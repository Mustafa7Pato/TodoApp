import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      {props.children}
    </button>
  );
};

export default Button;
