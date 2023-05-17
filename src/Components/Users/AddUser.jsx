import React, { useState } from "react";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [goals, setGoals] = useState("");

  const valueChange = (e) => {
    setGoals(e.target.value);
  };
  const addTodos = (e) => {
    e.preventDefault();
    if (goals.trim().length === 0) {
      return;
    }
    props.onAddGoals(goals);
    setGoals("");
  };
  return (
    <div className="w-full flex justify-center mt-3">
      <form onSubmit={addTodos} className="flex items-center">
        <input
          type="text"
          placeholder="Put Your Goals"
          className="border border-gray-300 rounded-lg px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={valueChange}
          value={goals}
        />
        <Button>Add Todo</Button>
      </form>
    </div>
  );
};

export default AddUser;
