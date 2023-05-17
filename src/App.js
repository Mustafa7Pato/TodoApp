import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

const App = () => {
  const [addGoals, setAddGoals] = useState([]);
  const addGoalHandler = (goals) => {
    setAddGoals((prevState) => {
      return [...prevState, { task: goals }];
    });
  };
  const handleDeleteGoal = (goal) => {
    const updatedGoals = addGoals.filter((g) => g !== goal);
    setAddGoals(updatedGoals);
  };
  return (
    <div className="container">
      <AddUser onAddGoals={addGoalHandler} />
      <UsersList goals={addGoals} onDelete={handleDeleteGoal} />
    </div>
  );
};

export default App;
