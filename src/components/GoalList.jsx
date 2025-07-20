import React from "react";
import GoalItem from "./GoalItem";
import "../styles/GoalList.css";

export default function GoalList({ goals, setGoals }) {
    return (
        <div className="goal-list">
        {goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} setGoals={setGoals} />
        ))}
        </div>
    );
}