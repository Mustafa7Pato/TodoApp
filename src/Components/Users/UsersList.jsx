import React, { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const UsersList = (props) => {
  const [completedGoals, setCompletedGoals] = useState([]);

  const handleGoalClick = (goal) => {
    if (completedGoals.includes(goal)) {
      setCompletedGoals(completedGoals.filter((g) => g !== goal));
    } else {
      setCompletedGoals([...completedGoals, goal]);
    }
  };
  return (
    <ul className="list-disc list-inside text-pink-500 font-medium w-full flex flex-wrap justify-center">
      {props.goals.map((goal) => (
        <li
          key={Math.random() * 10}
          className="mb-2 bg-slate-950 rounded-2xl list-none  p-3 mt-4 ml-2 flex justify-between w-1/2"
        >
          <h1
            onClick={() => handleGoalClick(goal)}
            style={{
              textDecoration: completedGoals.includes(goal)
                ? "line-through"
                : "none",
            }}
          >
            {goal.task}
          </h1>
          <div className="btns">
            {completedGoals.includes(goal) ? (
              <button onClick={() => props.onDelete(goal)}>
                <AiFillCheckCircle size={25} />
              </button>
            ) : (
              <button className="ml-2" onClick={() => props.onDelete(goal)}>
                <AiFillCloseCircle size={25} />
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
